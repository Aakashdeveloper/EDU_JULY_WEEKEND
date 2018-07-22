import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'myUpper'
})

export class UpperValuePipe implements PipeTransform {

    transform(value: string, type: string) {
        if (type === 'lower') {
            value = value.toLowerCase();
        } else {
            value = value.toUpperCase();
        }
        return value;
    }

}

/*
indexof
filterBy
ternery op


function add(a,b,aakash){
    return a+b+aakash
}

add(1,2,4)

var add = (a,b) => {
    return a+b
}

*/

