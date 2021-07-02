import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { ProductCommentsComponent } from './product-comments.component';
import { Store } from '@ngrx/store';

fdescribe('ProductCommentsComponent', () => {
  let component: ProductCommentsComponent;
  let fixture: ComponentFixture<ProductCommentsComponent>;
  let someState={
    selector: 'getComments',
    value: {
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
    }
  };
  let initialState = {
    selector: 'getComments',
    value: {
      questions: {},
      comments: [
        {
          id: '36719',
          productId: '6040d6ba1e240556a8b76ed9',
          userId: '60ba21fa76d6230bd7167872',
          comment: 'blah',
          likesUsers: [],
          dislikesUsers: [],
        },
        {
          id: '66809',
          productId: '6040d6ba1e240556a8b76ec8',
          userId: '60ba21fa76d6230bd7167872',
          comment: 'my nice comment',
          likesUsers: [],
          dislikesUsers: [],
        },
      ],
    }
  };
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
    fixture.detectChanges();
  });

  beforeEach(() => {
    
  });

  it('setup', () => {
    component.dislike(someState.value.comments[0]);
   
    store.select('getComments').subscribe(res =>
        expect(res).toEqual(someState)
      )
  });
});
