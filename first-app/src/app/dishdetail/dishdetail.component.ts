import { Component, OnInit , Input } from '@angular/core';
import { Dish } from '../shared/dish';

import { Params,ActivatedRoute } from '@angular/router';
// to get the parameters passed by router Params is used
import { Location } from '@angular/common';
// track of Location is kept using Location
import { DishService  } from '../services/dish.service';

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.css']
})
export class DishdetailComponent implements OnInit {
  


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

  }
  goBack():void{
    this.location.back();
  }
}
