import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast'
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar'
import { SharedModule } from './../shared-module/shared-module.module';
import { DropdownModule } from 'primeng/dropdown';
import { DialogModule } from 'primeng/dialog';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CalendarModule } from 'primeng/calendar';
import { CardModule} from 'primeng/card';
import { ConfirmDialogModule} from 'primeng/confirmdialog';
import { SelectButtonModule } from 'primeng/selectbutton';
import { CheckboxModule } from 'primeng/checkbox';
import {InputNumberModule} from 'primeng/inputnumber';

import { ServiceRoutingModule } from './service-routing.module';
import { ServiceComponent } from './service.component';
import { UserViewComponent } from './user-view/user-view.component';
import { AdminViewComponent } from './admin-view/admin-view.component';
import { InputTextModule } from 'primeng/inputtext';



@NgModule({
  declarations: [ServiceComponent, UserViewComponent, AdminViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    ServiceRoutingModule, 
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    ToastModule, 
    TableModule,
    ToolbarModule,
    DialogModule, 
    DropdownModule,
    RadioButtonModule, 
    InputTextModule,
    InputTextareaModule, 
    CalendarModule,
    CardModule,
    ConfirmDialogModule,
    SelectButtonModule, 
    CheckboxModule,
    InputNumberModule,
  ]
})
export class ServiceModule { }
