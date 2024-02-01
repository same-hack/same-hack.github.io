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
export class SqlGeneratorComponent {
  schema = 'スキーマ';
  table = 'テーブル';

  datas: any = [{ column: 'カラム', value: "'データ'", isIncrement: false }];

  dataCount = 1;

  addColumn() {
    this.datas.push({
      column: 'カラム',
      value: "'データ'",
      isIncrement: false,
    });
  }

  dropColumn() {
    this.datas.pop();
  }

  calcCount(dataCount: number) {
    return [...Array(dataCount)];
  }
}
