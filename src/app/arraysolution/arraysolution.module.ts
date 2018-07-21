import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArraySolutionComponent } from './arraysolution.component';
import { ArraySolutionService } from './arraysolution.service';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [ ArraySolutionComponent ],
  providers:    [ ArraySolutionService ],
  exports: [ ArraySolutionComponent ]
})
export class ArraysolutionModule { }
