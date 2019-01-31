import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperienceComponent } from './experience/experience.component';
import { ArticlesComponent } from './articles/articles.component';
import { EducationComponent } from './education/education.component';
import { GetInTouchComponent } from './get-in-touch/get-in-touch.component';
import { ProjectsComponent } from './projects/projects.component';
import { MainComponent } from './main/main.component';



import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', component: MainComponent    },
  { path: 'experience', component: ExperienceComponent },
  { path: 'articles', component: ArticlesComponent },
  { path: 'education', component: EducationComponent  },
  { path: 'getintouch', component: GetInTouchComponent },
  { path: 'projects', component: ProjectsComponent },
  
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  exports : [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule { }


