import { Injectable } from '@angular/core';
import { LEADERS } from '../shared/leaders';
import { Leader } from '../shared/leader';
import { PROMOTIONS } from '../shared/promotions';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }
  getLeaders() : Leader[]{
    return LEADERS;
  }
  getFeaturedLeader() : Leader {
    return LEADERS.filter((lead) => lead.featured)[0];
  }
  
}
