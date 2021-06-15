import { ServiceRequestsService } from 'src/app/core/services/service-requests.service';
import { Product } from '../../core/models/product';
import { FormMapper } from '../../core/models/formMapper';
import { ProductService } from 'src/app/core/services/product.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { MessageService, ConfirmationService } from 'primeng/api';
import { CreateProduct } from 'src/app/core/models/createProduct';

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
  requests!: any;
  invoices!: any;
  product = new CreateProduct();
  request!: any;
  invoice!: any;
  requestDialog = false;
  customOtherBrandField = false;
  customOtherNameField = false;
  bikes!: any;
  editIdR = null;
  editIdI = null;
  sortAsc = true;
  filteredBikes: any[] = [];
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
  selectedRequests!: any;
  constructor(
    private fb: FormBuilder,
    private productsService: ProductService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private serviceRequestService: ServiceRequestsService
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
          .filter((item: any) => item.name !== null)
          .map((item) => {
            let container = { label: '', value: '', product: {} };
            container.label = item.name.slice(0, 25);
            container.value = item.name.slice(0, 25);
            container.product = item;
            return container;
          });
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
      requestId: '',
      price: 0,
    });
    this.refreshRequests();
  }
  sortByDate() {
    if (this.sortAsc) {
      this.requests.sort(function (a: any, b: any) {
        return new Date(a.date) < new Date(b.date)
          ? -1
          : new Date(a.date) > new Date(b.date)
          ? 1
          : 0;
      });
      this.sortAsc = false;
    } else {
      this.requests.sort(function (a: any, b: any) {
        return new Date(a.date) > new Date(b.date)
          ? -1
          : new Date(a.date) < new Date(b.date)
          ? 1
          : 0;
      });
      this.sortAsc = true;
    }
  }
  filterByBrand(event: any) {
    this.customOtherNameField = false;
    if (!event.value) this.filteredBikes = this.bikes;
    else
      this.filteredBikes = this.bikes.filter(
        (item: any) => item.product.brand == event.value
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
          this.serviceRequestService.requestRemover(element)
        );
        this.selectedRequests = null;
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Requests Deleted',
          life: 3000,
        });
      this.refreshRequests();
      },
    });
  }
  deleteRequest(request: any) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete this request?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.serviceRequestService.requestRemover(request);
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Request Deleted',
          life: 3000,
        });
      this.refreshRequests();
      },
    });
  }

  editRequest(request: any) {
    this.requestDialog = true;
    this.editIdR = request.id;
    request.date = new Date(request.date);
    this.requestForm.patchValue(request);
    this.invoice = this.serviceRequestService.findInvoiceForRequest(request);
    if (this.invoice) {
      this.invoiceForm.patchValue(this.invoice);
      if(this.invoice.name) this.pj = true;
      this.editIdI = this.invoice.id;
    }
    if (this.requestForm.controls.brand.value == 'Other') {
      this.customOtherBrandField = true;
      this.customOtherNameField = true;
    }
  }

  hideDialog() {
    this.requestDialog = false;
    this.resetValues();
  }
  saveRequest() {
    this.request = new FormMapper(this.requestForm.value);
    this.invoice = new FormMapper(this.invoiceForm.value);
    this.request.user = JSON.parse(localStorage.getItem('user')!).id;
    if(this.editIdR)
      this.request.id = this.editIdR;
    else
      this.request.id = Math.floor(Math.random() * 1000).toString();
    if(this.editIdI)
      this.invoice.id = this.editIdI;
    else{
      this.invoice.id = Math.floor(Math.random() * 1000).toString();
      this.invoice.requestId = this.request.id;
    }
    if (this.customOtherBrandField && this.customOtherNameField)
      this.postNewProduct(this.request);

    this.serviceRequestService.updateRequests(this.request);
    this.serviceRequestService.updateInvoices(this.invoice);

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

  resetValues() {
    this.requestForm.reset({
      status: 'pending',
    });
    this.invoiceForm.reset();
    this.customOtherBrandField = false;
    this.editIdI = null;
    this.editIdR = null;
    this.pj = false;
    this.invoice = null;
    this.request = null;
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

  refreshRequests() {
    let userId: string;
    localStorage.getItem("user") !== null ?
      userId=JSON.parse(localStorage.getItem('user')!).id : null;
    if (localStorage.getItem('serviceRequests'))
      this.requests = JSON.parse(
        localStorage.getItem('serviceRequests')!
      ).items.filter((el:any)=> el.user==userId);
  }
  deleteInvoice(invoice: any){
    this.serviceRequestService.deleteInvoice(invoice);
  }
}
