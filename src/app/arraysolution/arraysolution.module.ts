import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArraySolutionDefaultComponent } from './arraysolution-default/arraysolution-default.component';
import { ArraySolutionOnPushComponent } from './arraysolution-on-push/arraysolution-on-push.component';
import { ArraySolutionContainerComponent } from './arraysolution-container.component';
import { ArraySolutionService } from './arraysolution.service';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [ ArraySolutionContainerComponent, ArraySolutionDefaultComponent, ArraySolutionOnPushComponent ],
  providers:    [ ArraySolutionService ],
  exports: [ ArraySolutionContainerComponent, ArraySolutionDefaultComponent, ArraySolutionOnPushComponent ]
})
export class ArraysolutionModule { }
