import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css']

})

export class ProductComponent implements OnInit {
    title: String = '******Product List******' ;
    showTable: Boolean = false;
    showImage: Boolean = false;
    filterText: String;
    errorText: string;
    imageWidth: Number = 50;
    today: number = Date.now();
    products: any[];

    constructor(private _productService: ProductService) {}

    ngOnInit(): void {
        this._productService.getProducts()
            .subscribe((data) => this.products = data,
                (err) => this.errorText = err);
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    onDataRecive(message: string) {
        this.title = '******Product list Rating is>>>' + message;
    }
}



/*
//styles: ['thead{color:green}', 'h3{color:purple}'],
One Way Binding
--Data Binding {{}}
--Property Binding []
--Event Binding ()
Two Way Binding [()]

string
number
boolean

JSON:-
[{
    name:"A",
    class:1
},
{
    name:"B",
    class:2
}]


var a = "name"

MEAN


a coding apttern in which a class receives the instance of object
it need from external source rather than creating it
*/
