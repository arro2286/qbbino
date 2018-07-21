import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArraySolutionDefaultComponent } from './arraysolution-default/arraysolution-default.component';
import { ArraySolutionService } from './arraysolution.service';
import { ReactiveFormsModule } from '@angular/forms';
import { ArraySolutionOnPushComponent } from './arraysolution-on-push/arraysolution-on-push.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [ ArraySolutionDefaultComponent, ArraySolutionOnPushComponent ],
  providers:    [ ArraySolutionService ],
  exports: [ ArraySolutionDefaultComponent, ArraySolutionOnPushComponent ]
})
export class ArraysolutionModule { }
