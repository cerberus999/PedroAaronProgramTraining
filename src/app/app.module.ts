import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardReposComponent } from './card-repos/card-repos.component';
import { CardUserComponent } from './card-user/card-user.component';

@NgModule({
  declarations: [
    AppComponent,
    CardUserComponent,
    CardReposComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
