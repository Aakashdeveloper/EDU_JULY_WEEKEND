import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from './product.model';

@Pipe({
    name: 'filterData'
})

export class FilterProductPipe implements PipeTransform {
    transform(value: IProduct[], filterBy: string ): IProduct[] {
        filterBy = filterBy ? filterBy.toLowerCase() : null;
        return filterBy ? value.filter((products: IProduct) =>
            products.productName.toLowerCase().indexOf(filterBy) !== -1) : value;
    }
}


/*
function add(u,b){
    return u+b
}

add(1,5)
*/
