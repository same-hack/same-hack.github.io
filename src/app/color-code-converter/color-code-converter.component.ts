import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-code-converter',
  templateUrl: './color-code-converter.component.html',
  styleUrls: ['../common/common.scss', './color-code-converter.component.scss'],
})
export class ColorCodeConverterComponent implements OnInit {
  /**入力されたRGBコード */
  inputRgb: string = '133, 208, 207';
  /**RGBコードから変換した16進数表記 */
  outputHexDecimal: string = '';
  /**サンプルカラー */
  outputHexDecimalColor: string = '';
  /**サンプルカラー */
  outputHexDecimalBgColor: string = '';
  isShowOutputHexDecimalColor: boolean = true;

  /**入力されたRGBコード */
  inputHexDecimal: string = '85d0cf';
  /**RGBコードから変換した16進数表記 */
  outputRgb: string = '';
  /**サンプルカラー */
  outputRgbColor: string = '';
  /**サンプルカラー */
  outputRgbBgColor: string = '';
  isShowOutputRgbColor: boolean = true;

  constructor() {}

  ngOnInit(): void {
    this.convertRgbToHex(this.inputRgb);
    this.convertHexToRgb(this.inputHexDecimal);
  }

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

    // カンマで区切ってリスト化
    const rgbList = colorCode.split(',');
    if (rgbList.length != 3) {
      this.outputHexDecimal = 'カンマ区切りで入力してください';
      this.isShowOutputHexDecimalColor = false;
      return;
    }
    this.isShowOutputHexDecimalColor = true;

    this.outputHexDecimal = '#';
    // 16進数に変換
    rgbList.forEach((rgb) => {
      this.outputHexDecimal += this.zeroPadding(Number(rgb).toString(16), 2);
    });
    this.outputHexDecimalColor = `color : ${this.outputHexDecimal}`;
    this.outputHexDecimalBgColor = `background-color:${this.outputHexDecimal}`;
  }

  /**rgbコード→16進数の変換 */
  convertHexToRgb(colorCode: string): void {
    if (colorCode.length != 6) {
      this.outputRgb = '6文字で入力してください';
      this.isShowOutputRgbColor = false;
      return;
    }
    this.isShowOutputRgbColor = true;
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
