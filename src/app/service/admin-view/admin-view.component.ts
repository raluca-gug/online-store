import { ServiceRequestsService } from './../../../services/service-requests.service';
import { AccountService } from 'src/services/account.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.scss'],
  providers: [MessageService, ConfirmationService],
})
export class AdminViewComponent implements OnInit {
  @ViewChild('dt') dt: Table | undefined;
  invoiceForm!: FormGroup;
  requestDialog=false;
  requests!: any;
  requestsMutated!: any;
  request!: any;
  invoice!: any;
  invoices!: any;
  selectedRequests!: any;
  statusOptions = [
    { label: 'pending', value: 'pending' },
    { label: 'aproved', value: 'aproved' },
    { label: 'inRepair', value: 'in repair' },
    { label: 'done', value: 'done' },
  ];
  constructor(
    private formBuilder: FormBuilder,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private accountService: AccountService,
    private serviceRequestService: ServiceRequestsService, 
  ) {}

  ngOnInit(): void {
    this.refreshRequests();
    this.invoiceForm=this.formBuilder.group({
      price: ['',],
      status: ''
    })
  }

  hideDialog(){
    this.requestDialog=false;
  }
  generateNewInvoice(){
    this.invoice={cui: '',
      id: Math.floor(Math.random() * 1000).toString(),
      name: "",
      price: 0,
      requestId: "",
      ro: false,
    }
  }

  editInvoice(req: any){
    this.requestDialog=true;
    this.request=req;
    this.invoice=this.serviceRequestService.findInvoiceForRequest(req);
    if(this.invoice)
      this.invoiceForm.patchValue({status: req.status, price: this.invoice.price})
      else {
        this.generateNewInvoice();
        this.invoiceForm.patchValue({status: req.status, price: this.invoice.price})
        this.invoice.requestId=req.id;
        }
  }

  saveInvoice(){
    this.invoice.price=this.invoiceForm.controls.price.value;
    this.request.status=this.invoiceForm.controls.status.value;
    this.request.user=this.request.user.id;
    this.serviceRequestService.updateInvoices(this.invoice);
    this.serviceRequestService.updateRequests(this.request);
    this.requestDialog=false;
    this.invoiceForm.reset();
    this.messageService.add({
      severity: 'success',
      summary: 'Successful',
      detail: 'Request saved',
      life: 3000,
    });
  }
  applyFilterGlobal($event: Event, stringVal: string) {
    this.dt!.filterGlobal(
      ($event.target as HTMLInputElement).value,
      'contains'
    );
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
 
  refreshRequests(){
    if (localStorage.getItem('serviceRequests'))
      this.requests = JSON.parse(
        localStorage.getItem('serviceRequests')!
      ).items;
    this.requestsMutated=this.requests;
    this.requests.forEach((element: any, i: number) => {
       this.accountService.getById(element.user).subscribe(res=>{
         this.requestsMutated[i].user=res;
       })
    });
  }
}
