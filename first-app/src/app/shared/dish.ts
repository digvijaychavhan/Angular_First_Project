//created manually not generated

export class Dish {
    id: string;
    name: string;
    image: string;
    category: string;
    featured?: boolean;   //  ?makes property optional
    label: string;
    price: string;
    description: string;

    constructor() {
        this.id = '';
        this.name = '';
        this.image = '';
        this.category = '';  //initialize onject
        this.label = '';
        this.price = '';
        this.description = '';
    }
}