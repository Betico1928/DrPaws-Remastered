import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

// Import del componente LandingPageComponent
import { LandingPageComponent } from './landing-page/landing-page.component';

@NgModule({
  declarations: [
    AppComponent,

    // Declaración del componente LandingPageComponent
    LandingPageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [], 
  bootstrap: [AppComponent]
})
export class AppModule { }
