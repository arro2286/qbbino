import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ArraysolutionModule } from './arraysolution/arraysolution.module';

@NgModule({
  imports:      [ BrowserModule, ReactiveFormsModule, ArraysolutionModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
})
export class AppModule {

}
