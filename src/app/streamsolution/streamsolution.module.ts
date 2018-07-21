import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StreamSolutionService } from './streamsolution.service';
import { StreamSolutionDefaultComponent } from './streamsolution-default/streamsolution-default.component';
import { StreamSolutionOnPushComponent } from './streamsolution-on-push/streamsolution-on-push.component';
import { StreamSolutionContainerComponent } from './streamsolution-container.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [ StreamSolutionContainerComponent, StreamSolutionDefaultComponent, StreamSolutionOnPushComponent],
  providers:    [ StreamSolutionService ],
  exports: [ StreamSolutionContainerComponent, StreamSolutionDefaultComponent, StreamSolutionOnPushComponent],
})
export class StreamsolutionModule { }
