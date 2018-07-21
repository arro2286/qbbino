import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArrayMainComponent } from './main/array-main.component';
import { ArrayDataService } from './arraydata.service';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [ ArrayMainComponent ],
  providers:    [ ArrayDataService ],
  exports: [ ArrayMainComponent ]
})
export class ArraysolutionModule { }
