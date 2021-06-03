import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceRequestsService {

  constructor() { }

  readLocalStorage(name: string) {
    let storageData: { items?: any } = {};
    storageData.items = [];
    if (localStorage.getItem(name)) {
      storageData.items = JSON.parse(localStorage.getItem(name)!).items;
    }
    return storageData.items;
  }
  writeLocalStorage(name: string, data: any) {
    localStorage.setItem(name, JSON.stringify(data));
  }
  updateInvoices(invoice: any){
    let edit=-1
    let invoices: { items?: any } = {};
    invoices.items=[];
    invoices.items=this.readLocalStorage('invoiceData');
    console.log('invoices in services', invoices);
    invoices.items.forEach((el: any, i:number) => {
      if(el.id==invoice.id) edit=i;
    });
    if(edit<0) invoices.items.push(invoice);
    else invoices.items[edit]=invoice;
    this.writeLocalStorage("invoiceData", invoices);
  }
  updateRequests(request: any){
    let edit=-1;
    let requests: { items?: any } = {};
    requests.items=[];
    requests.items=this.readLocalStorage('serviceRequests');
    requests.items.forEach((el: any, i:number) => {
      if(el.id==request.id) edit=i;
    });
    if(edit<0) requests.items.push(request);
    else requests.items[edit]=request;
    this.writeLocalStorage("serviceRequests", requests);
  }
  findInvoiceForRequest(request: any){
    let invoices=this.readLocalStorage('invoiceData');
    if (invoices) {
      return invoices.filter((item:any)=> item.requestId==request.id)[0];
    }
    else return null;
  }
  requestRemover(request: any) {
      let storageRequest =
        this.readLocalStorage('serviceRequests');
      let invoice = this.findInvoiceForRequest(request);
      let storageRequestUpdated: { items?: any } = {};
      storageRequestUpdated.items = [];
      storageRequestUpdated.items = storageRequest.filter(
        (element: any) => element.id != request.id
      );
      this.writeLocalStorage(
        'serviceRequests',
        storageRequestUpdated
      );
      this.deleteInvoice(invoice);
    }
  
    deleteInvoice(invoice: any) {
      let invoices = this.readLocalStorage('invoiceData');
      let storageRequestUpdated: { items?: any } = {};
      storageRequestUpdated.items = [];
      storageRequestUpdated.items = invoices.filter(
        (element: any) => element.id != invoice.id
      );
      this.writeLocalStorage(
        'invoiceData',
        storageRequestUpdated
      );
    }
}
