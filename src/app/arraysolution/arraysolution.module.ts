import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArraySolutionComponent } from './arraysolution.component';
import { ArrayDataService } from './arraydata.service';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [ ArraySolutionComponent ],
  providers:    [ ArrayDataService ],
  exports: [ ArraySolutionComponent ]
})
export class ArraysolutionModule { }
