import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubmitStreamSolutionDefaultComponent } from './submit-stream-solution-default/submit-stream-solution-default.component';
import { SubmitStreamSolutionOnPushComponent } from './submit-stream-solution-on-push/submit-stream-solution-on-push.component';
import { SubmitStreamSolutionContainerComponent } from './submit-stream-solution-container.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [ SubmitStreamSolutionContainerComponent, SubmitStreamSolutionDefaultComponent, SubmitStreamSolutionOnPushComponent],
  providers:    [ ],
  exports: [ SubmitStreamSolutionContainerComponent, SubmitStreamSolutionDefaultComponent, SubmitStreamSolutionOnPushComponent],
})
export class SubmitStreamSolutionModule { }
