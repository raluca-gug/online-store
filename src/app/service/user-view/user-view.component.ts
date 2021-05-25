import { Product } from './../../models/product';
import { FormMapper } from './../../models/formMapper';
import { ProductService } from 'src/services/product.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { MessageService, ConfirmationService } from 'primeng/api';
import { CreateProduct } from 'src/app/models/createProduct';
import { write } from 'node:fs';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.scss'],
  providers: [MessageService, ConfirmationService],
})
export class UserViewComponent implements OnInit {
  @ViewChild('dt') dt: Table | undefined;
  requestForm!: FormGroup;
  invoiceForm!: FormGroup;
  products!: Product[];
  product = new CreateProduct();
  requests!: any;
  request!: any;
  invoices!: any;
  invoice!: any;
  requestDialog = false;
  customOtherBrandField = false;
  customOtherNameField = false;
  bikes!: any;
  editIdR=null;
  editIdI=null;
  filteredBikes = [];
  minDate = new Date();
  brands = [
    { label: 'MERIDA', value: 'MERIDA' },
    { label: 'ROCKRIDER', value: 'ROCKRIDER' },
    { label: 'GIANT', value: 'GIANT' },
    { label: 'BTWIN', value: 'BTWIN' },
    { label: 'Other', value: 'Other' },
  ];
  issues = [
    { label: 'Breaks', value: 'Breaks' },
    { label: 'Suspensions', value: 'Suspensions' },
    { label: 'Gears', value: 'Gears' },
    { label: 'Wheels', value: 'Wheels' },
    { label: 'Other', value: 'Other' },
  ];
  pj = false;
  billing: any[];

  brandOption!: any;
  selectedBrand = '';
  selectedRequests!: any;
  constructor(
    private fb: FormBuilder,
    private productsService: ProductService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {
    this.billing = [
      { label: 'on', value: true },
      { label: 'off', value: false },
    ];
  }

  ngOnInit(): void {
    this.productsService
      .getProducts(0, 100, 'price', 'ASC')
      .subscribe((res) => {
        this.products = res.content;
        this.bikes = this.products
        .filter((item: any)=>item.name!==null)
        .map((item) => {
          let container = { label: '', value: '', image: '', brand: '' };
          container.label = item.name.slice(0, 25);
          container.value = item.name.slice(0, 25);
          container.image = item.image;
          container.brand = item.brand;
          return container;
        });
        console.log('bici',this.bikes);
        this.filteredBikes = this.bikes;
      });
    this.requestForm = this.fb.group({
      brand: [null, Validators.required],
      bikeName: [null, Validators.required],
      issue: [null, Validators.required],
      details: [''],
      date: [, Validators.required],
      status: 'pending',
    });
    this.invoiceForm = this.fb.group({
      name: '',
      ro: false,
      cui: '',
      requestId: ''
    });

    if (localStorage.getItem('serviceRequests'))
      this.requests = JSON.parse(
        localStorage.getItem('serviceRequests')!
      ).items;
  }

  filterByBrand(event: any) {
    this.customOtherNameField = false;
    if (!event.value) this.filteredBikes = this.bikes;
    else
      this.filteredBikes = this.bikes.filter(
        (item: any) => item.brand == event.value
      );
    if (event.value == 'Other') {
      this.customOtherNameField = true;
      this.customOtherBrandField = true;
      this.filteredBikes = [];
      this.requestForm.controls.bikeName.reset();
    }
  }

  openNew() {
    this.requestDialog = true;
  }

  deleteSelectedRequest() {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete these request?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.selectedRequests.forEach((element: any) =>
          this.requestRemover(element)
        );
        this.selectedRequests = null;
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Requests Deleted',
          life: 3000,
        });
      },
    });
  }
  deleteRequest(request: any) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete this request?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.requestRemover(request);
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Request Deleted',
          life: 3000,
        });
      },
    });
  }
 
  requestRemover(request: any) {
    let storageRequest= this.readLocalStorage('serviceRequests');
    let invoice=this.findInvoiceForRequest(request);
    let storageRequestUpdated: { items?: any } = {};
    storageRequestUpdated.items = [];
      storageRequestUpdated.items = storageRequest.filter(
        (element: any) => element.id != request.id
      );
    this.writeLocalStorage('serviceRequests', storageRequestUpdated);
    this.deleteInvoice(invoice);
    this.refreshRequests();
  }

  deleteInvoice(invoice:any){
    let invoices=this.readLocalStorage('invoiceData');
    let storageRequestUpdated: { items?: any } = {};
    storageRequestUpdated.items = [];
    storageRequestUpdated.items=invoices.filter(
      (element:any) => element.id!=invoice.id
    );
    this.writeLocalStorage('invoiceData', storageRequestUpdated);
    this.invoice=null;
    this.invoiceForm.reset();
  }
  findInvoiceForRequest(request: any){
    let invoices=this.readLocalStorage('invoiceData');
    if (invoices) {
      return invoices.filter((item:any)=> item.requestId==request.id)[0];
      // return invoices[0]
    }
    else return null;
  }
  editRequest(request: any) {
    this.requestDialog = true;
    this.editIdR=request.id;
    request.date = new Date(request.date);
    this.requestForm.patchValue(request);
    this.invoice=this.findInvoiceForRequest(request);
    console.log('this invoice', this.invoice);
    if(this.invoice) {
      console.log('found invoice:', request.id, this.invoice.requestId)
      this.invoiceForm.patchValue(this.invoice);
      this.pj=true;
      this.editIdI=this.invoice.id;
    }
    if (this.requestForm.controls.brand.value == 'Other') {
      this.customOtherBrandField = true;
      this.customOtherNameField = true;
    }
    console.log('editable', this.invoice);
  }

  hideDialog() {
    this.requestDialog = false;
    this.requestForm.reset({
      status: 'pending',
    });
    this.resetValues();
  }
  saveRequest() {
    let editIndex = -1;
    this.request = new FormMapper(this.requestForm.value);
    this.request.id=this.editIdR;
    this.invoice = new FormMapper(this.invoiceForm.value)
    this.invoice.id=this.editIdI;
    console.log(this.request, this.invoice);
    if (!this.request.id) {
      this.request.id = Math.floor(Math.random() * 1000).toString();
      this.request.user = JSON.parse(localStorage.getItem('user')!).id;
    }
    if(!this.invoice.id) this.invoice.id=Math.floor(Math.random() * 1000).toString();
    this.invoice.requestId=this.request.id;
    if (this.customOtherBrandField && this.customOtherNameField)
      this.postNewProduct(this.request);

    let storageRequest: { items?: any } = {};
    storageRequest.items = [];

    //request
    storageRequest.items=this.readLocalStorage('serviceRequests');
    if(storageRequest.items) 
      storageRequest.items.forEach((element: any, i: any) => {
        if (element.id === this.request.id) editIndex = i;
      });
    if (editIndex < 0) storageRequest.items.push(this.request);
    else storageRequest.items[editIndex] = this.request;
    console.log('trimit', storageRequest)
    this.writeLocalStorage('serviceRequests', storageRequest)

    //invoice
    editIndex=-1
    if(this.invoice.name && this.invoice.cui){
      storageRequest.items=this.readLocalStorage('invoiceData');
      storageRequest.items.forEach((element: any, i: any) => {
        if (element.id === this.invoice.id)
          editIndex = i; 
      });
      if (editIndex < 0) storageRequest.items.push(this.invoice);
      else storageRequest.items[editIndex] = this.invoice;
      console.log('trimit i', storageRequest)
      this.writeLocalStorage('invoiceData', storageRequest);
    }

    this.requestDialog = false;
    this.resetValues();
    this.refreshRequests();
    this.messageService.add({
      severity: 'success',
      summary: 'Successful',
      detail: 'Request saved',
      life: 3000,
    });
  }
  resetValues(){
    this.requestForm.reset({
      status: 'pending',
    });
    this.invoiceForm.reset();
    this.customOtherBrandField = false;
    this.editIdI=null;
    this.editIdR=null;
    this.pj=false;
    this.invoice=null;
    this.request=null;
  }

  applyFilterGlobal($event: Event, stringVal: string) {
    this.dt!.filterGlobal(
      ($event.target as HTMLInputElement).value,
      'contains'
    );
  }

  postNewProduct(request: any) {
    this.product.brand = request.brand;
    this.product.description = request.details;
    this.product.name = request.bikeName;
    this.product.image =
      'https://bowcycleebikes.com/wp-content/uploads/woocommerce-placeholder-700x404.png';
    this.product.itemsInStock = 0;
    this.product.price = 1000;
    this.product.rating = 0;
    this.productsService.postProduct(this.product).subscribe();
  }

  readLocalStorage(name:string){
    let storageData: { items?: any } = {};
    storageData.items = [];
    if (localStorage.getItem(name)) {
      storageData.items = JSON.parse(
        localStorage.getItem(name)!
      ).items;
    }
    return storageData.items;
  }
  writeLocalStorage(name: string, data: any){
    localStorage.setItem(
      name,
      JSON.stringify(data))
  }
  refreshRequests(){
    if (localStorage.getItem('serviceRequests'))
      this.requests = JSON.parse(
        localStorage.getItem('serviceRequests')!
      ).items;
  }
}
