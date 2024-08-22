import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss'],
})
export class UpdateComponent {
  // 初期スキーマとテーブル
  schema = 'スキーマ';
  table = 'テーブル';

  // デフォルトのデータオブジェクト
  conditions: any = ["name = 'サメハック'"];
  setValues: any = ["age = '100'"];

  // 追加するデータの数
  dataCount = 1;

  // 条件式を追加するメソッド
  addCondition() {
    this.conditions.push("カラム = '値'");
  }

  // 条件式を削除するメソッド
  dropCondition() {
    this.conditions.pop();
  }

  // 条件式を追加するメソッド
  addValue() {
    this.setValues.push("カラム = '値'");
  }

  // 条件式を削除するメソッド
  dropValue() {
    this.setValues.pop();
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
