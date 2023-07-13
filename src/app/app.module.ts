import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { RightSideComponent } from './right-side/right-side.component';
import { LefSideComponent } from './lef-side/lef-side.component';
import { MiddleSideComponent } from './middle-side/middle-side.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainContentComponent } from './main-content/main-content.component';
import { LeftBar1Component } from './left-bar1/left-bar1.component';
import { LeftBar2Component } from './left-bar2/left-bar2.component';
import { ProfileStatusComponent } from './profile-status/profile-status.component';
import { CommentsComponent } from './comments/comments.component';
import { ViewComponent } from './view/view.component';
import { SponsoredComponent } from './sponsored/sponsored.component';
import { BirthdaysComponent } from './birthdays/birthdays.component';
import { ContactsComponent } from './contacts/contacts.component';
import { SeeComponent } from './see/see.component';
import { MoreComponent } from './more/more.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    RightSideComponent,
    LefSideComponent,
    MiddleSideComponent,
    MainContentComponent,
    LeftBar1Component,
    LeftBar2Component,
    ProfileStatusComponent,
    CommentsComponent,
    ViewComponent,
    SponsoredComponent,
    BirthdaysComponent,
    ContactsComponent,
    SeeComponent,
    MoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
