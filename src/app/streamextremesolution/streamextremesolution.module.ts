import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StreamExtremeSolutionDefaultComponent } from './streamextremesolution-default/streamextremesolution-default.component';
import { StreamExtremeSolutionOnPushComponent } from './streamextremesolution-on-push/streamextremesolution-on-push.component';
import { StreamExtremeSolutionContainerComponent } from './streamextremesolution-container.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [ StreamExtremeSolutionContainerComponent, StreamExtremeSolutionDefaultComponent, StreamExtremeSolutionOnPushComponent],
  providers:    [ ],
  exports: [ StreamExtremeSolutionContainerComponent, StreamExtremeSolutionDefaultComponent, StreamExtremeSolutionOnPushComponent],
})
export class StreamExtremesolutionModule { }
