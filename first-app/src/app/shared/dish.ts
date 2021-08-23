//created manually not generated
import { Comment } from './comment';

//Comment we have declared seprately but it was also possible to declare comment class here and use it in Dish

export class Dish {
    id: string;
    name: string;
    image: string;
    category: string;
    featured?: boolean;   //  ?makes property optional
    label: string;
    price: string;
    description ?: string;

    comments: Comment[];
    constructor() {
        this.id = '';
        this.name = '';
        this.image = '';
        this.category = '';  //initialize onject
        this.label = '';
        this.price = '';
        this.description = '';
        this.comments=[];
    }
}