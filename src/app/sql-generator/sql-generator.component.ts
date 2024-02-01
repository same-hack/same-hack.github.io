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
  // 初期スキーマとテーブル
  schema = 'スキーマ';
  table = 'テーブル';

  // デフォルトのデータオブジェクト
  datas: any = [{ column: 'カラム', value: "'データ'", isIncrement: false }];

  // 追加するデータの数
  dataCount = 1;

  // カラムを追加するメソッド
  addColumn() {
    this.datas.push({
      column: 'カラム',
      value: "'データ'",
      isIncrement: false,
    });
  }

  // カラムを削除するメソッド
  dropColumn() {
    this.datas.pop();
  }

  // データの数に基づいて配列を生成するメソッド
  calcCount(dataCount: number) {
    return [...Array(dataCount)];
  }

  // 生成されたSQLコードをクリップボードにコピーするメソッド
  getCode() {
    // 特定のdiv要素を取得
    const element = document.getElementById('code');

    // div内のすべてのテキストを取得
    const allText: string =
      String(element?.textContent) || String(element?.innerText);

    // 新しいテキストエリアを作成し、その中にテキストを設定
    const textArea = document.createElement('textarea');
    textArea.value = allText;

    // テキストエリアをDOMに追加
    document.body.appendChild(textArea);

    // テキストエリアを選択してコピー
    textArea.select();
    document.execCommand('copy');

    // テキストエリアを削除
    document.body.removeChild(textArea);
  }
}
