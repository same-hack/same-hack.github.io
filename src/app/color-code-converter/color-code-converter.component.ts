import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-code-converter',
  templateUrl: './color-code-converter.component.html',
  styleUrls: [
    '../home/home.component.scss',
    './color-code-converter.component.scss',
  ],
})
export class ColorCodeConverterComponent implements OnInit {
  /**入力されたRGBコード */
  inputRgb: string = '255, 255, 255';
  /**RGBコードから変換した16進数表記 */
  outputHexDecimal: string = '';
  /**サンプルカラー */
  outputHexDecimalColor: string = '';
  /**サンプルカラー */
  outputHexDecimalBgColor: string = '';

  /**入力されたRGBコード */
  inputHexDecimal: string = 'ffffff';
  /**RGBコードから変換した16進数表記 */
  outputRgb: string = '';
  /**サンプルカラー */
  outputRgbColor: string = '';
  /**サンプルカラー */
  outputRgbBgColor: string = '';

  constructor() {}

  ngOnInit(): void {}

  /**
   * 指定した桁数に0埋めする関数
   * @param {int} num 対象の数値
   * @param {int} zeroLength 埋めたい0の数
   * @return {String} 0埋めされた文字列
   */
  zeroPadding(num: any, zeroLength: number) {
    // "0"を入れるための変数
    let zero = '';

    // zeroLength個の"0"をつける
    for (let i = 0; i < zeroLength; i++) {
      zero += '0';
    }

    // numの前に指定した数の"0"をつけ、末尾の文字数を削る
    return (zero + num).slice(-zeroLength);
  }

  /**rgbコード→16進数の変換 */
  convertRgbToHex(colorCode: string): void {
    this.outputHexDecimalColor, (this.outputHexDecimalBgColor = '');

    this.outputHexDecimal = '#';
    // カンマで区切ってリスト化
    const rgbList = colorCode.split(',');
    // 16進数に変換
    rgbList.forEach((rgb) => {
      this.outputHexDecimal += this.zeroPadding(Number(rgb).toString(16), 2);
    });
    this.outputHexDecimalColor = `color : ${this.outputHexDecimal}`;
    this.outputHexDecimalBgColor = `background-color:${this.outputHexDecimal}`;
  }
  /**rgbコード→16進数の変換 */
  convertHexToRgb(colorCode: string): void {
    this.outputRgb = 'rgb(';
    const hexList = [];

    hexList.push(colorCode.slice(0, 2));
    hexList.push(colorCode.slice(2, 4));
    hexList.push(colorCode.slice(4, 6));

    // 16進数に変換
    hexList.forEach((hex, index) => {
      if (index < 2) {
        this.outputRgb += parseInt(hex, 16) + ',';
      } else {
        this.outputRgb += parseInt(hex, 16) + ')';
      }
    });
    this.outputRgbColor = `color : ${this.outputRgb}`;
    this.outputRgbBgColor = `background-color:${this.outputRgb}`;
  }
}
