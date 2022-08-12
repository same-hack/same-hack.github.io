import { Component } from '@angular/core';

@Component({
  selector: 'app-house-size-converter',
  templateUrl: './house-size-converter.component.html',
  styleUrls: ['../common/common.scss', './house-size-converter.component.scss'],
})
export class HouseSizeConverterComponent {
  /**坪数 */
  tsubo: number = 30;
  tsuboToOneSquareMetres = 3.30578;

  /**平米数 */
  squareMetres: number = 99.17;
  squareMetresToOneTsubo = 0.3025;

  /**坪数　→　平米数 */
  convertTsuboToSquareMetres(value: number) {
    // 少数第3位を四捨五入
    this.squareMetres =
      Math.round(value * this.tsuboToOneSquareMetres * 100) / 100;
  }

  /**平米数 →　坪数 */
  convertSquareMetresToTsubo(value: number) {
    // 少数第3位を四捨五入
    this.tsubo = Math.round(value * this.squareMetresToOneTsubo * 100) / 100;
  }
}
