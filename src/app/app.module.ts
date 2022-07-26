import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ConverterComponent } from './converter/converter.component';
import { HeaderComponent } from './header/header.component';
import { RoutingModule } from './routing.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent, ConverterComponent, HeaderComponent],
  // imports: [BrowserModule, AppRoutingModule, FormsModule, RoutingModule],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
