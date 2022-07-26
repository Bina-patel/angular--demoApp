import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectComponent } from './project/project.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent // similar to app.use()
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule // inject module to enable ngModel directive
  ],
  providers: [],
  bootstrap: [ProjectComponent]
})
export class AppModule { }