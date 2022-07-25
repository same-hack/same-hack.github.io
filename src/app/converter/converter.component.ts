import { Component } from '@angular/core';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss'],
})
export class ConverterComponent {
  /**2進数 */
  binary: string = '0';
  /**10進数 */
  decimal: number = 0;
  /**16進数 */
  hexDecimal: string = '0';

  /**2進数　→　n進数 */
  convertBinary(value: string) {
    this.decimal = parseInt(value, 2);
    this.hexDecimal = parseInt(value, 2).toString(16);
  }
  /**10進数　→　n進数 */
  convertDecimal(value: number) {
    this.binary = value.toString(2);
    this.hexDecimal = value.toString(16);
  }

  /**16進数　→　n進数 */
  convertHexDecimal(value: string) {
    this.decimal = parseInt(value, 16);
    this.binary = parseInt(value, 16).toString(2);
  }
}
