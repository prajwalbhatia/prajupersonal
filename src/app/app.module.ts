import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import {ServerService} from './server.service';
import {HttpModule} from '@angular/http';
import { ExperienceComponent } from './experience/experience.component';
import { ProjectsComponent } from './projects/projects.component';
import { EducationComponent } from './education/education.component';
import { GetInTouchComponent } from './get-in-touch/get-in-touch.component';
import { ArticlesComponent } from './articles/articles.component';
import { NavDivComponent } from './nav-div/nav-div.component';
import { DivShow } from './divShow.service';
import { AppRoutingModule } from './app-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';






@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ExperienceComponent,
    ProjectsComponent,
    EducationComponent,
    GetInTouchComponent,
    ArticlesComponent,
    NavDivComponent,

    
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpModule,
    AppRoutingModule,
  ],
  providers: [
    DivShow,
    ServerService],
  bootstrap: [AppComponent]
})


export class AppModule { }
