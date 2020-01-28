import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentServiceService } from './student-service.service';

@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    StudentDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [StudentServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
