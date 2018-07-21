import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StreamCenterSolutionService } from './streamcentersolution.service';
import { StreamCenterSolutionDefaultComponent } from './streamcentersolution-default/streamcentersolution-default.component';
import { StreamCenterSolutionOnPushComponent } from './streamcentersolution-on-push/streamcentersolution-on-push.component';
import { StreamCenterSolutionContainerComponent } from './streamcentersolution-container.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [ StreamCenterSolutionContainerComponent, StreamCenterSolutionDefaultComponent, StreamCenterSolutionOnPushComponent],
  providers:    [ StreamCenterSolutionService ],
  exports: [ StreamCenterSolutionContainerComponent, StreamCenterSolutionDefaultComponent, StreamCenterSolutionOnPushComponent],
})
export class StreamCentersolutionModule { }
