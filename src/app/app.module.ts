import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { TaskHomeComponent } from './task-home/task-home.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskDetailsComponent } from './components/task-details/task-details.component';
import { HeaderButtonsComponent } from './components/header-buttons/header-buttons.component';
import { CreateTaskComponent } from './components/create-task/create-task.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ApiHttpService } from './services/api-http-service.service';
import { ApiEndpointsService } from './services/api-endpoints.service';
import { Constants } from 'src/config/constants';
import { TasksEndpointsService } from './services/tasks-endpoints.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TaskHomeComponent,
    TaskListComponent,
    TaskDetailsComponent,
    HeaderButtonsComponent,
    CreateTaskComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    Constants,
    ApiHttpService,
    ApiEndpointsService,
    TasksEndpointsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
