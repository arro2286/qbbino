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


const appRoutes: Routes = [
  { path: 'arraysolution', component: ArraySolutionContainerComponent },
  { path: 'streamsolution', component: StreamSolutionContainerComponent },
];

@NgModule({
  imports:      [ BrowserModule,
                  ReactiveFormsModule,
                  ArraysolutionModule,
                  StreamsolutionModule,
                  RouterModule.forRoot(
                    appRoutes) ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [ ItemRestService ],
})
export class AppModule {

}
