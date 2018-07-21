import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoreStreamSolutionService } from './morestreamsolution.service';
import { MoreStreamSolutionDefaultComponent } from './morestreamsolution-default/morestreamsolution-default.component';
import { MoreStreamSolutionOnPushComponent } from './morestreamsolution-on-push/morestreamsolution-on-push.component';
import { MoreStreamSolutionContainerComponent } from './morestreamsolution-container.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [ MoreStreamSolutionContainerComponent, MoreStreamSolutionDefaultComponent, MoreStreamSolutionOnPushComponent],
  providers:    [ MoreStreamSolutionService ],
  exports: [ MoreStreamSolutionContainerComponent, MoreStreamSolutionDefaultComponent, MoreStreamSolutionOnPushComponent],
})
export class MoreStreamsolutionModule { }
