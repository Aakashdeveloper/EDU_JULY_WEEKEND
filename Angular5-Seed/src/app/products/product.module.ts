import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ProductComponent } from './product.component';
import { UpperValuePipe } from './upperValue.pipe';
import { AddValuePipe } from './addValue.pipe';
import { FilterProductPipe } from './filterText.pipe';
import { ProductDetailComponent } from './product-detail.component';
import { StarComponent } from '../shared/star.component';
import { ProductService } from './product.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        ProductComponent,
        UpperValuePipe,
        AddValuePipe,
        FilterProductPipe,
        ProductDetailComponent
    ],
    imports: [
        RouterModule.forChild([
            {path: 'products', component: ProductComponent},
            {path: 'products/:id', component: ProductDetailComponent},
        ]),
        SharedModule
    ],
    providers: [
        ProductService
    ]
})

export class ProductModule {

}
