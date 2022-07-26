import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColorCodeConverterComponent } from './color-code-converter/color-code-converter.component';
import { ConverterComponent } from './converter/converter.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'base-number-converter', component: ConverterComponent },
  { path: 'color-code-converter', component: ColorCodeConverterComponent },
];

@NgModule({
  // useHashを定義しないとGitHubPagesでルーティングが反映されない。
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
