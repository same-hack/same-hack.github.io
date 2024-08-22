import { Component, OnInit } from '@angular/core';
interface SelectBoxOption {
  text: string;
  value: number;
}
@Component({
  selector: 'app-dump-generator',
  templateUrl: './dump-generator.component.html',
  styleUrls: ['../common/common.scss', './dump-generator.component.scss'],
})
export class DumpGeneratorComponent {
  // 初期スキーマとテーブル
  host = '10.50.122.86';
  port = '5432';
  user = 'postgres';
  db = 'my_db';
  schema = 'my_schema';
  nameFile = 'my_dump';

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
