import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AllpostComponent } from './allpost/allpost.component';
import { ThispostComponent } from './thispost/thispost.component';
import { MatCardModule} from '@angular/material/card';
import { MatButtonModule} from '@angular/material/button'

@NgModule({
  declarations: [
    AppComponent,
    AllpostComponent,
    ThispostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
