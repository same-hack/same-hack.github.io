import { Component, OnInit } from '@angular/core';
interface SelectBoxOption {
  text: string;
  value: number;
}
@Component({
  selector: 'app-sql-generator',
  templateUrl: './sql-generator.component.html',
  styleUrls: ['../common/common.scss', './sql-generator.component.scss'],
})
export class SqlGeneratorComponent {}
