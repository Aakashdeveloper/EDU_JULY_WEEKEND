import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { OrderComponent } from './orders/orders.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './shared/notFound.component';
import { ProductModule } from './products/product.module';


@NgModule({
    // All Module will declare here
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot([
            {path: 'orders', component: OrderComponent },
            {path: 'home', component: HomeComponent },
            {path: '', redirectTo: 'home', pathMatch: 'full'},
            {path: '**', component: NotFoundComponent}

        ]),
        ProductModule
    ],
    // All Component & pipes
    declarations: [
        AppComponent,
        OrderComponent,
        HomeComponent,
        NotFoundComponent
    ],
    // Only first component will come here
    bootstrap: [
        AppComponent
     ],
    // All Service / Injectable will come here
    providers: []
})

export class AppModule {

}
