import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ConverterComponent } from './converter/converter.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { ColorCodeConverterComponent } from './color-code-converter/color-code-converter.component';
import { TextCounterComponent } from './text-counter/text-counter.component';

@NgModule({
  declarations: [AppComponent, ConverterComponent, HeaderComponent, HomeComponent, ColorCodeConverterComponent, TextCounterComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
