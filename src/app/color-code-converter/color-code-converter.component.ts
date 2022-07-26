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
  inputRgbCode: string = '255, 255, 255';
  /**RGBコードから変換した16進数表記 */
  outputHexDecimal: string = '';

  /**入力されたRGBコード */
  inputHexDecimal: string = 'ffffff';
  /**RGBコードから変換した16進数表記 */
  outputRgbCode: string = '';

  constructor() {}

  ngOnInit(): void {}

  /**rgbコード→16進数の変換 */
  convertRgbToHex(colorCode: string): void {
    this.outputHexDecimal = '#';
    // カンマで区切ってリスト化
    const rgbList = colorCode.split(',');
    // 16進数に変換
    rgbList.forEach((rgb) => {
      this.outputHexDecimal += Number(rgb).toString(16);
    });
  }
  /**rgbコード→16進数の変換 */
  convertHexToRgbCode(colorCode: string): void {
    this.outputRgbCode = 'rgb(';
    const hexList = [];

    hexList.push(colorCode.slice(0, 2));
    hexList.push(colorCode.slice(2, 4));
    hexList.push(colorCode.slice(4, 6));

    console.log(hexList);

    // 16進数に変換
    hexList.forEach((hex, index) => {
      if (index < 2) {
        this.outputRgbCode += parseInt(hex, 16) + ',';
      } else {
        this.outputRgbCode += parseInt(hex, 16) + ')';
      }
    });
  }
}
