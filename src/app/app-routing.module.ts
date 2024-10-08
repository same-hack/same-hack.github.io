import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColorCodeConverterComponent } from './color-code-converter/color-code-converter.component';
import { BaseNumberConverterComponent } from './base-number-converter/base-number-converter.component';
import { HomeComponent } from './home/home.component';
import { TextCounterComponent } from './text-counter/text-counter.component';
import { SqlGeneratorComponent } from './sql-generator/sql-generator.component';
import { QrCodeGeneratorComponent } from './qr-code-generator/qr-code-generator.component';
import { ClockComponent } from './clock/clock.component';
import { HouseSizeConverterComponent } from './house-size-converter/house-size-converter.component';
import { MortgageComponent } from './mortgage/mortgage.component';
import { TaxCalculatorComponent } from './tax-calculator/tax-calculator.component';
import { DumpGeneratorComponent } from './dump-generator/dump-generator.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'base-number-converter', component: BaseNumberConverterComponent },
  { path: 'color-code-converter', component: ColorCodeConverterComponent },
  { path: 'text-counter', component: TextCounterComponent },
  // { path: 'sql-generator', component: SqlGeneratorComponent },
  { path: 'clock', component: ClockComponent },
  { path: 'tax-calculator', component: TaxCalculatorComponent },
  { path: 'qrcode-generator', component: QrCodeGeneratorComponent },
  { path: 'house-size-converter', component: HouseSizeConverterComponent },
  { path: 'mortgage', component: MortgageComponent },
  { path: 'sql', component: SqlGeneratorComponent },
  { path: 'dump-generator', component: DumpGeneratorComponent },
];

@NgModule({
  // useHashを定義しないとGitHubPagesでルーティングが反映されない。
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
