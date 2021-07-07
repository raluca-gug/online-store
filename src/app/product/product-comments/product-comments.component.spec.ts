import { ProductComment, getComments } from './state/product-comments.reducer';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { ProductCommentsComponent } from './product-comments.component';
import { MemoizedSelector } from '@ngrx/store';

fdescribe('ProductCommentsComponent', () => {
  let user=JSON.stringify({
    "firstName": "Raluca",
    "lastName": "Vana",
    "email": "raluca.vana@gmail.com",
    "username": "Raluca1234",
    "telephone": "0700000",
    "sex": "",
    "password": "$2a$10$4GWTI56aIFnbwPLbDA27nO9GzWe8mHvRkugyggf5GFWNF5tWt/eay",
    "addressEntity": {
        "address": "dacia",
        "city": "Oradea",
        "county": "bihor",
        "postalCode": "161616"
    },
    "id": "60ba21fa76d6230bd7167872",
    "token": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI2MGJhMjFmYTc2ZDYyMzBiZDcxNjc4NzIsUmFsdWNhMTIzNCIsImlzcyI6ImV1LmFjY2VzYS5vbmxpbmVzdG9yZSIsImlhdCI6MTYyMjgxMTQ2NywiZXhwIjoxNjIzNDE2MjY3fQ.H7Dx_xgUZN9QY3Pa2qpGI66X_Ax-jdKaOmX6c0OCRgdFL5qPYqT8DCBKfd-T-C1btACrJ5mRZia9NIXPt_upTA"
})
  let component: ProductCommentsComponent;
  let fixture: ComponentFixture<ProductCommentsComponent>;
  let initialState={
      questions: {},
      comments: [
        {
          id: '36719',
          productId: '6040d6ba1e240556a8b76ed9',
          userId: '60ba21fa76d6230bd7167872',
          comment: 'blah',
          likesUsers: [],
          dislikesUsers: [],
        }
      ],
  };
  let getCommentsM: MemoizedSelector<any, any>
  let store: MockStore;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule, 
        RouterModule.forRoot([]),
        ReactiveFormsModule,
      ],
      declarations: [ProductCommentsComponent],
      providers: [
        provideMockStore({initialState})
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(ProductCommentsComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
    getCommentsM=store.overrideSelector(
      getComments,
          [{
            id: '36719',
            productId: '6040d6ba1e240556a8b76ed9',
            userId: '60ba21fa76d6230bd7167872',
            comment: 'blah',
            likesUsers: [],
            dislikesUsers: [],
          }]
    )
    store.refreshState();
    localStorage.setItem('user', user);
    fixture.detectChanges();
  });

  beforeEach(() => {
    
  });

  it('setup', () => {
    component.dislike(initialState.comments[0]);
    getCommentsM.setResult([{
      id: '36719',
      productId: '6040d6ba1e240556a8b76ed9',
      userId: '60ba21fa76d6230bd7167872',
      comment: 'blah',
      likesUsers: [],
      dislikesUsers: ["60ba21fa76d6230bd7167872"],
    }])
   
    
        expect(component.usernames[0]).toEqual('initialState')

  });
});
