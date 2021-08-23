import { Component, OnInit , Input } from '@angular/core';
import { Dish } from '../shared/dish';



@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.css']
})
export class DishdetailComponent implements OnInit {
  

@Input()
dish!: Dish;
// as dish input is taken from user on click dish is not pre selected/defined and so it gives error while compiling
// using dish!: Dish;     says that the dish value is given at runtime
  constructor() {
  
   }

  ngOnInit(): void {
  }

}
