import { Component } from '@angular/core';
import { Employee } from '../model/employee.model';
import { NgForm } from '@angular/forms';
import { FormService } from '../services/form-poster.service';

@Component({
  selector: 'app-template',
  templateUrl: './forms.component.html'
})

export class FormsComponent {
    languages = ['AngularJS', 'ReactJs', 'NodeJs'];
    model = new Employee('john', 'andrew', 'a@a.co', true, 'male', 'AngularJS');

    constructor(private _formService: FormService) {}
    firstToUpper(value: string): void {
        if (value.length > 0) {
            this.model.firstName = value.charAt(0).toUpperCase() + value.slice(1);
        } else {
            this.model.firstName = value;
        }
    }

    submitForm(form: NgForm) {
        console.log(form.value);
        this._formService.postEmploye(form.value)
            .subscribe(
                data => console.log('success'),
                err => console.log(err)
            );
    }
}


/*
ng-pristine ng-untouched ng-valid
ng-dirty    ng-touched   ng-invalid
*/
