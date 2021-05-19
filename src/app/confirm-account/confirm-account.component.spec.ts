import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ConfirmAccountComponent } from './confirm-account.component';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginComponent } from '../account/login/login.component';

describe('ConfirmAccountComponent', () => {
  let component: ConfirmAccountComponent;
  let fixture: ComponentFixture<ConfirmAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        RouterTestingModule.withRoutes([
          { path: 'account/login', component: LoginComponent },
        ]),
      ],
      declarations: [ConfirmAccountComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
