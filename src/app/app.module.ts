import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConfigSideBarComponent } from './config-side-bar/config-side-bar.component';
import { UserCardComponent } from './user-card/user-card.component';

import {MatNativeDateModule} from '@angular/material/core';
import {MatBadgeModule} from '@angular/material/badge';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserCardUniqueComponent } from './user-card-unique/user-card-unique.component';

@NgModule({
  declarations: [
    AppComponent,
    ConfigSideBarComponent,
    UserCardComponent,
    UserCardUniqueComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    MatBadgeModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatInputModule,
    MatNativeDateModule,
    MatButtonModule,
    MatCardModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
