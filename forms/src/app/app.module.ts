import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { FormsComponent } from './forms/forms.component';
import { FormService } from './services/form-poster.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    FormsComponent
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [
    FormService
  ]
})

export class AppModule {

}

