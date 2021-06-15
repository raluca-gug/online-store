import { CreateUser } from '../models/createUser';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable, of } from 'rxjs';
import { User } from 'src/app/core/models/user';
import { environment } from 'src/environments/environment';
let httpClientSpy: { get: jasmine.Spy; post: jasmine.Spy; put: jasmine.Spy };

import { AccountService } from './account.service';

xdescribe('AccountService', () => {
  let service: AccountService;
  let user: User;
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
    });
    service = TestBed.inject(AccountService);
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'post', 'put']);
    service = TestBed.inject(AccountService);
    httpController= TestBed.inject(HttpTestingController);
    user = {
      firstName: 'Julie',
      lastName: 'Anderson',
      email: 'judy@judy.com',
      username: 'judy',
      telephone: '754545778',
      sex: 'F',
      password: '$2a$10$/cXsj4MNvG8UQUDMTPT/ie1tlT67.9mkm6OF4ropL2DjZF5LtXR1m',
      addressEntity: {
        address: 'Strada cetatii nr 2',
        city: 'Bucuresti',
        county: 'Bucuresti',
        postalCode: '73452699',
      },
      id: '60491531f8cb6a1bb44c6c9a',
    };
  });

  describe('isAuthenticated', ()=>{
    it('should return true if user is logged in', ()=>{
      let user={id: 1, username: 'raluca'}
      localStorage.setItem('user', JSON.stringify(user));

      expect(service.isAuthenticated).toEqual(true);
    })
    it('should return false if no user is logged in', ()=>{
      localStorage.removeItem('user');

      expect(service.isAuthenticated).toEqual(false);
    })
    it('should return false if user object is empty', ()=>{
      let user={}
      localStorage.setItem('user', JSON.stringify(user));

      expect(service.isAuthenticated).toEqual(false);
    })
  })

  describe('login()', ()=>{
    it('should POST username and psw at correct url', ()=>{
      service.login('raluca', 'parola').subscribe();

      const req=httpController.expectOne(`${environment.apiUrl}/login`)
      expect(req.request.method).toEqual('POST')
    });
    it('should push current user in the user subject', ()=>{
      service.login('raluca', 'parola').subscribe();

      const req=httpController.expectOne(`${environment.apiUrl}/login`)
      req.flush({username: 'raluca'})
      expect(service.userSubject.value.username).toEqual('raluca')
    })
  })
  describe('logout()', ()=>{
    it('should delete user form local storage', ()=>{
      service.logout();

      expect(JSON.parse(localStorage.getItem('user')!)).toEqual(null);
    });
    it('should push empty user in the user subject', ()=>{
      service.logout();

      expect(service.userSubject.value.username).toEqual('')
    })
  })

  describe('register', ()=>{
    it('should POST new user at correct url', ()=>{
      let user=new CreateUser;
      service.register(user).subscribe();

      const req=httpController.expectOne(`${environment.apiUrl}/users/register`)
      expect(req.request.method).toEqual('POST')
    });
  })

  describe('getAll', ()=>{
    it('should make a GET request at correct url', ()=>{
      service.getAll().subscribe();

      const req=httpController.expectOne(`${environment.apiUrl}/users/findAll`)
      expect(req.request.method).toEqual('GET')
    });
  })
  
  describe('getById', ()=>{
    it('should make a GET request at correct url', ()=>{
      service.getById('1').subscribe();

      const req=httpController.expectOne(`${environment.apiUrl}/users/1`)
      expect(req.request.method).toEqual('GET')
    });
  })

  describe('update()', ()=>{
    it('should PUT updated user at correct url', ()=>{
      let user={...new CreateUser(), id: '1'}
      service.update(user.id, {...user}).subscribe();

      const req=httpController.expectOne(`${environment.apiUrl}/users/1`)
      expect(req.request.method).toEqual('PUT')
    });
    it('should push current user in the user subject', ()=>{
      let user={id:'1', firstname: 'raluca'};
      service.update('1', {...user}).subscribe();

      const req=httpController.expectOne(`${environment.apiUrl}/users/1`)
      req.flush({...user})
      expect(service.userSubject.value).toEqual(user);
    })
  })

  describe('delete()', ()=>{
    it('should make DELETE request at correct url', ()=>{
      service.delete('1').subscribe();

      const req=httpController.expectOne(`${environment.apiUrl}/users/1`)
      expect(req.request.method).toEqual('DELETE')
    });
  })

  describe('CreateUser()', ()=>{
    it('should POST user at correct url', ()=>{
      let user={...new CreateUser(), id: '1'}
      service.createUser(user).subscribe();

      const req=httpController.expectOne(`${environment.apiUrl}/users`)
      expect(req.request.method).toEqual('POST')
    });
  })


});
