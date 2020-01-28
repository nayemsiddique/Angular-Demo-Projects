import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentListComponent } from './student-list/student-list.component';
import { TeacherListComponent } from './teacher-list/teacher-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';



const routes: Routes = [
  {path:'' , redirectTo:'students',pathMatch:'full'},
  {path:'students',component: StudentListComponent},
  {path:'teachers',component:TeacherListComponent},
  {path: "**",component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { };

export const routingModules=[StudentListComponent,TeacherListComponent];
