import { User } from './../../core/models/user';
import { AccountService } from './../../core/services/account.service';
import { getComments, getQuestions, ProductComment, Questions } from './state/product-comments.reducer';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
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
  questionsForm!: FormGroup;
  replyForm!: FormGroup;
  comments!: ProductComment[];
  questions!: any; 
  usernames: string[]=[];
  showMessage=false;
  panelOpenState!: boolean [];
  user!: User;
  showReplyForm=false;

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private store: Store, private accountService: AccountService) { }

  ngOnInit(): void {
    if(localStorage.getItem('user')!==null) this.user=JSON.parse(localStorage.getItem('user')!);
    this.commentsForm= this.fb.group({
      id:'',
      productId:  this.route.snapshot.params['id'],
      userId: this.user.id,
      comment:[ '', Validators.required],
      likesUsers: this.fb.array([]),
      dislikesUsers: this.fb.array([])
    })

    this.questionsForm=this.fb.group({
      id:'',
      userId: `${this.user.firstName} ${this.user.lastName}`,
      text: [ '', Validators.required],
      date: new Date(),
      productId: this.route.snapshot.params['id'],
      reply: this.fb.array([]),
    })

    this.replyForm=this.fb.group({
      id:'',
      userId: `${this.user.firstName} ${this.user.lastName}`,
      text: [ '', Validators.required],
      date: new Date(),
      productId: this.route.snapshot.params['id'],
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
      this.panelOpenState=new Array(this.comments.length).fill(false);
    })

    this.store.select(getQuestions).subscribe(res=> {
      if (res.length>0) this.questions=res.filter(el=> el.productId==this.route.snapshot.params['id']);
      console.log(this.questions, res);
    })
  }

  submitComment() {
    this.commentsForm.controls['id'].setValue(Math.floor(Math.random() * 100000).toString());
    this.store.dispatch(Actions.addComment({comment: this.commentsForm.value}));
    this.commentsForm.controls['comment'].reset();
  }

  like(com: ProductComment) {
    if (com.userId!=this.user.id && !com.likesUsers.includes(this.user.id)) {
      this.store.dispatch(Actions.likeComment({id: com.id, userId: this.user.id}))
    } else 
      if (com.userId!=this.user.id && com.likesUsers.includes(this.user.id)) {
        this.store.dispatch(Actions.removeLikeComment({id: com.id, userId: this.user.id}))
      } else {
        this.showMessage=true;
        setTimeout(()=> this.showMessage=false, 3000)
      }
  }

  dislike(com: any) {
    if (com.userId!=this.user.id && !com.dislikesUsers.includes(this.user.id)) {
      this.store.dispatch(Actions.dislikeComment({id: com.id, userId: this.user.id}))
    } else 
      if (com.userId!=this.user.id && com.dislikesUsers.includes(this.user.id)) {
        this.store.dispatch(Actions.removeDislikeComment({id: com.id, userId: this.user.id}))
      } else {
        this.showMessage=true;
        setTimeout(()=> this.showMessage=false, 3000)
      }
  }

  submitQuestion() {
    this.questionsForm.controls['id'].setValue(Math.floor(Math.random() * 100000).toString());
    this.store.dispatch(Actions.addQuestion({question: this.questionsForm.value}));
    this.questionsForm.controls['text'].reset();
  }

  submitReply(questionId: string) {
    this.showReplyForm= false;
    this.replyForm.controls['id'].setValue(Math.floor(Math.random() * 100000).toString());
    this.store.dispatch(Actions.addReply({reply: this.replyForm.value, questionId}));
    this.replyForm.controls["text"].reset();
  }

}
