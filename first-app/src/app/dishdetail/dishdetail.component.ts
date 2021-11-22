import { Component, OnInit , Input } from '@angular/core';
import { Dish } from '../shared/dish';

import { Params,ActivatedRoute } from '@angular/router';
// to get the parameters passed by router Params is used
import { Location } from '@angular/common';
// track of Location is kept using Location
import { DishService  } from '../services/dish.service';
import { switchMap } from 'rxjs/operators';


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
// as dish input is taken from user on click dish is not pre selected/defined and so it gives error while compiling
// using dish!: Dish;     says that the dish value is given at runtime
  constructor(private dishService : DishService ,
    private route: ActivatedRoute,
     private location :Location) {
    
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
