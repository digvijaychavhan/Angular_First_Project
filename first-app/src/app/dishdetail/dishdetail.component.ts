import { Component, OnInit , Input ,ViewChild,ElementRef } from '@angular/core';
import { Dish } from '../shared/dish';

import { Params,ActivatedRoute } from '@angular/router';
// to get the parameters passed by router Params is used
import { Location } from '@angular/common';
// track of Location is kept using Location
import { DishService  } from '../services/dish.service';
import { switchMap } from 'rxjs/operators';
import { Comment } from '../shared/comment';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';


@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.css']
})
export class DishdetailComponent implements OnInit {
  
  dishIds!: string[];
  prev !: string;
  next !: string;

  dish!: Dish;
  commentForm !: FormGroup;
  comment !: Comment;
  

  formErrors : any = {
    'author': '',
    'comment': '',

  };

  validationMessages : any= {
    'author': {
      'required':      'Author Name is required.',
      'minlength':     'Author Name must be at least 2 characters long.',
      'maxlength':     'Name cannot be more than 25 characters long.'
    },
    'comment': {
      'required':      'Comment is required.',
      
    },
    
  };

  @ViewChild('cform') commentFormDirective !:NgForm;
// as dish input is taken from user on click dish is not pre selected/defined and so it gives error while compiling
// using dish!: Dish;     says that the dish value is given at runtime
  constructor(private dishService : DishService ,
    private route: ActivatedRoute,
    private location :Location,
    private fb: FormBuilder) {
    this.createForm();
   }

   createForm() :void  {

    this.commentForm = this.fb.group({
      author: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)] ],
      rating: 5 ,
      comment: ['', Validators.required ],
    });
    
    this.commentForm.valueChanges
      .subscribe(data => this.onValueChanged(data));

    this.onValueChanged(); // (re)set validation messages now

  }

  onValueChanged(data?: any) {
    if (!this.commentForm) { return; }
    const form = this.commentForm;
    for (const field in this.formErrors) {
      if (this.formErrors.hasOwnProperty(field)) {
        // clear previous error message (if any)
        this.formErrors[field] = '';
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              this.formErrors[field] += messages[key] + ' ';
            }
          }
        }
      }
    }
  }

  onSubmit():void {
    this.commentForm.value.date = new Date().toISOString();
    this.comment = this.commentForm.value;
    this.dish.comments.push(this.comment);
    console.log(this.comment);
    this.commentFormDirective.resetForm( );
    this.commentForm.reset({
      author: '',
      rating:5,
      comment: ''
    });
   }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.dishService.getDish(id).subscribe(dish => this.dish = dish);
    this.dishService.getDishIds().subscribe(dishIds => this.dishIds = dishIds);
    this.route.params.pipe(switchMap((params: Params) => this.dishService.getDish(params['id'])))
    .subscribe(dish => { this.dish = dish; this.setPrevNext(dish.id); });
  }

  setPrevNext(dishId: string) {
    const index = this.dishIds.indexOf(dishId);
    this.prev = this.dishIds[(this.dishIds.length + index - 1) % this.dishIds.length];
    this.next = this.dishIds[(this.dishIds.length + index + 1) % this.dishIds.length];
  }

  goBack():void{
    this.location.back();
  }
}
