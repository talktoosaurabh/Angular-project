import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { FooterComponent } from './common/footer/footer.component';
import { SupportComponent } from './common/support/support.component';
import { SliderComponent } from './home/slider/slider.component';
import { CourseSectionComponent } from './home/course-section/course-section.component';
import { LeftSidebarComponent } from './courses/left-sidebar/left-sidebar.component';
import { ContentSectionComponent } from './courses/content-section/content-section.component';
import { CoursesComponent } from './courses/courses/courses.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SupportComponent,
    SliderComponent,
    CourseSectionComponent,
    LeftSidebarComponent,
    ContentSectionComponent,
    CoursesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
