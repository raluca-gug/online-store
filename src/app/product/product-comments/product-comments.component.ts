import { AccountService } from './../../core/services/account.service';
import { getComments, ProductComment } from './state/product-comments.reducer';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import * as Actions from '../product-comments/state/product-comments.actions'

@Component({
  selector: 'app-product-comments',
  templateUrl: './product-comments.component.html',
  styleUrls: ['./product-comments.component.scss']
})

export class ProductCommentsComponent implements OnInit {
  commentsForm!: FormGroup;
  userId!: string;
  comments!: ProductComment[];
  usernames: string[]=[];
  showMessage=false;

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private store: Store, private accountService: AccountService) { }

  ngOnInit(): void {
    if(localStorage.getItem('user')!==null) this.userId=JSON.parse(localStorage.getItem('user')!).id;
    this.commentsForm= this.fb.group({
      id:'',
      productId:  this.route.snapshot.params['id'],
      userId: this.userId,
      comment:[ '', Validators.required],
      likesUsers: this.fb.array([]),
      dislikesUsers: this.fb.array([])
    })

    this.store.select(getComments).subscribe(res => {
      this.comments=res;
      if (this.comments.length>0)
        this.comments=this.comments.filter(el=> el.productId==this.route.snapshot.params['id']);
      if (this.comments.length>0)
        this.comments.forEach((el, index)=> {
          this.accountService.getById(el.userId).
            subscribe(user=> 
              this.usernames[index]=`${user.firstName} ${user.lastName}`
            )
        })
    })
  }

  submit() {
    this.commentsForm.controls['id'].setValue(Math.floor(Math.random() * 1000).toString());
    this.store.dispatch(Actions.addComment({comment: this.commentsForm.value}));
    this.commentsForm.controls['comment'].reset();
  }

  like(com: ProductComment) {
    if (com.userId!=this.userId && !com.likesUsers.includes(this.userId)) {
      this.store.dispatch(Actions.likeComment({id: com.id, userId: this.userId}))
    } else 
      if (com.userId!=this.userId && com.likesUsers.includes(this.userId)) {
        this.store.dispatch(Actions.removeLikeComment({id: com.id, userId: this.userId}))
      } else {
        this.showMessage=true;
        setTimeout(()=> this.showMessage=false, 3000)
      }
  }

  dislike(com: any) {
    if (com.userId!=this.userId && !com.dislikesUsers.includes(this.userId)) {
      this.store.dispatch(Actions.dislikeComment({id: com.id, userId: this.userId}))
    } else 
      if (com.userId!=this.userId && com.dislikesUsers.includes(this.userId)) {
        this.store.dispatch(Actions.removeDislikeComment({id: com.id, userId: this.userId}))
      } else {
        this.showMessage=true;
        setTimeout(()=> this.showMessage=false, 3000)
      }
  }

}
