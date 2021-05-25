import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.scss'],
  providers: [MessageService, ConfirmationService],
})
export class AdminViewComponent implements OnInit {
  requests!: any;
  selectedRequests!: any;
  constructor(
    private messageService: MessageService,
    private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
  }

  getRequests(){
    if(localStorage.getItem("serviceRequests"))
      this.requests=JSON.parse(localStorage.getItem("serviceRequests")!).items;
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

    this.selectedRequests.forEach((element: any) =>
      this.requestRemover(element)
    );
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
    let storageRequest: { items?: any } = {};
    storageRequest.items = [];
    let storageRequestUpdated: { items?: any } = {};
    storageRequestUpdated.items = [];
    if (localStorage.getItem('serviceRequests')) {
      storageRequest.items = JSON.parse(
        localStorage.getItem('serviceRequests')!
      ).items;
      storageRequestUpdated.items = storageRequest.items.filter(
        (element: any) => element.id != request.id
      );
    }
    localStorage.setItem(
      'serviceRequests',
      JSON.stringify(storageRequestUpdated)
    );
    if (localStorage.getItem('serviceRequests'))
      this.requests = JSON.parse(
        localStorage.getItem('serviceRequests')!
      ).items;
  }

}
