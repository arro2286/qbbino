import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ArraysolutionModule } from './arraysolution/arraysolution.module';
import { ItemRestService } from './item-rest.service';
import { RouterModule, Routes } from '@angular/router';
import { ArraySolutionContainerComponent } from './arraysolution/arraysolution-container.component';
import { StreamSolutionContainerComponent } from './streamsolution/streamsolution-container.component';
import { StreamsolutionModule } from './streamsolution/streamsolution.module';
import { MoreStreamsolutionModule } from './morestreamsolution/morestreamsolution.module';
import { MoreStreamSolutionContainerComponent } from './morestreamsolution/morestreamsolution-container.component';
import { StreamCentersolutionModule } from './streamcentersolution/streamcentersolution.module';
import { StreamCenterSolutionContainerComponent } from './streamcentersolution/streamcentersolution-container.component';
import { SubmitStreamSolutionContainerComponent } from './submit-stream-solution/submit-stream-solution-container.component';
import { SubmitStreamSolutionModule } from './submit-stream-solution/submit-stream-solution.module';



const appRoutes: Routes = [
  { path: 'arraysolution', component: ArraySolutionContainerComponent },
  { path: 'streamsolution', component: StreamSolutionContainerComponent },
  { path: 'morestreamsolution', component: MoreStreamSolutionContainerComponent },
  { path: 'streamcentersolution', component: StreamCenterSolutionContainerComponent },
  { path: 'submit-stream-solution', component: SubmitStreamSolutionContainerComponent },
];

@NgModule({
  imports:      [ BrowserModule,
                  ReactiveFormsModule,
                  ArraysolutionModule,
                  StreamsolutionModule,
                  MoreStreamsolutionModule,
                  StreamCentersolutionModule,
                  SubmitStreamSolutionModule,
                  RouterModule.forRoot(
                    appRoutes) ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [ ItemRestService ],
})
export class AppModule {

}
