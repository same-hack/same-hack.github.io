import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BaseNumberConverterComponent } from './base-number-converter/base-number-converter.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { ColorCodeConverterComponent } from './color-code-converter/color-code-converter.component';
import { TextCounterComponent } from './text-counter/text-counter.component';
import { SqlGeneratorComponent } from './sql-generator/sql-generator.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { QrCodeGeneratorComponent } from './qr-code-generator/qr-code-generator.component';
import { QRCodeModule } from 'angularx-qrcode';
import { ClockComponent } from './clock/clock.component';
import { HouseSizeConverterComponent } from './house-size-converter/house-size-converter.component';
import { MortgageComponent } from './mortgage/mortgage.component';
import { TaxCalculatorComponent } from './tax-calculator/tax-calculator.component';
import { UpdateComponent } from './sql-generator/update/update.component';
import { DumpGeneratorComponent } from './dump-generator/dump-generator.component';

@NgModule({
  declarations: [
    AppComponent,
    BaseNumberConverterComponent,
    HeaderComponent,
    HomeComponent,
    ColorCodeConverterComponent,
    TextCounterComponent,
    SqlGeneratorComponent,
    QrCodeGeneratorComponent,
    ClockComponent,
    HouseSizeConverterComponent,
    MortgageComponent,
    TaxCalculatorComponent,
    UpdateComponent,
    DumpGeneratorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    QRCodeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
