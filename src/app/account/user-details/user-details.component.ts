import { AdditionalDetails } from './../../core/models/additionalDetails';
import { AdditionalDetailsServiceService } from './../../core/services/additional-details-service.service';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { User } from 'src/app/core/models/user';
import { AccountService } from './../../core/services/account.service';
import {
  Component,
  OnInit,
  OnDestroy,
  AfterViewInit,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent implements OnInit, OnDestroy, AfterViewInit {
  constructor(
    private elementRef: ElementRef,
    private accountService: AccountService,
    private fb: FormBuilder,
    private additionalDetailsService: AdditionalDetailsServiceService
  ) {}

  user!: User;
  accountForm!: FormGroup;
  addressForm!: FormGroup;
  additionalDetailsForm!: FormGroup;
  additionalDetails!: AdditionalDetails;
  userLogo: any;
  detailsOption = 1;
  usernameExists = false;
  confirm = false;
  interval: any;
  order: any;
  darkTheme!: boolean;
  curentTheme!: boolean;
  metric = true;

  ngOnInit() {
    this.darkTheme = JSON.parse(localStorage.getItem('darkTheme')!);
    this.user = JSON.parse(localStorage.getItem('user') || '{ }');
    this.additionalDetails=this.additionalDetailsService.get(this.user.id);
    if (this.user.hasOwnProperty('firstName'))
      this.userLogo =
        this.user.firstName[0].toUpperCase() +
        this.user.lastName[0].toUpperCase();
    this.accountForm = this.fb.group({
      firstName: [this.user.firstName, Validators.required],
      lastName: [this.user.lastName, Validators.required],
      email: [this.user.email, Validators.required],
      username: [this.user.username, Validators.required],
      telephone: [this.user.telephone, [Validators.required, Validators.minLength(9)]],
    });

    this.addressForm = this.fb.group({
      address: [this.user.addressEntity.address, Validators.required],
      city: [this.user.addressEntity.city, Validators.required],
      county: [this.user.addressEntity.county, Validators.required],
      postalCode: [this.user.addressEntity.postalCode, Validators.required],
    });

    this.additionalDetailsForm = this.fb.group({
      id: this.user.id,
      weight: [this.additionalDetails.weight, [Validators.required, Validators.min(3), Validators.max(200)] ],
      height: [this.additionalDetails.height, [Validators.required, Validators.min(1), Validators.max(250)]],
      yearOfBirth: [this.additionalDetails.yearOfBirth, [Validators.required, Validators.min(1920), Validators.max(2020), Validators.pattern("^[0-9]*$")]],
    });
  }

  checkUsername() {
    if(this.accountForm.controls.username.value!=this.user.username){
      this.accountService
        .checkUsernameNotTaken(this.accountForm.controls.username.value)
        .subscribe((response: any) => {
          this.usernameExists = response;

        });
    }
  }

  submit(param: FormGroup) {
    if (param == this.accountForm)
      Object.assign(this.user, Object.assign(param.value));
    else {
      Object.assign(this.user.addressEntity, Object.assign(param.value));
      Object.assign(this.user);
    }
    this.accountService.userUpdate(this.user.id, this.user).subscribe();
    localStorage.setItem('user', JSON.stringify(this.user));
    this.confirm = true;
    this.interval = setInterval(() => {
      this.confirm = false;
    }, 1500);
  }

  submitAdditionalDetails() {
    this.additionalDetailsService.add(this.additionalDetailsForm.value);
    this.confirm = true;
    this.interval = setInterval(() => {
      this.confirm = false;
    }, 1500);
  }

  receiveSectionChangeFromMyOrder($event: any) {
    this.detailsOption = 4;
    this.order = $event;
  }
  receiveSectionChangeFromOrderItem($event: any) {
    this.detailsOption = $event;
  }

  ngAfterViewInit() {
    this.darkTheme
      ? (this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor =
          '#3d3c3c')
      : (this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor =
          '#fafbfc');
  }
  receive(event: any) {
    this.curentTheme = event;
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor =
      this.curentTheme;
    this.darkTheme = JSON.parse(localStorage.getItem('darkTheme')!);
  }

  ngOnDestroy() {
    if ((this, this.interval)) {
      clearInterval(this.interval);
    }
  }
}
