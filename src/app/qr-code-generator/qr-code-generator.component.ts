import { Component } from '@angular/core';

@Component({
  selector: 'app-qr-code-generator',
  templateUrl: './qr-code-generator.component.html',
  styleUrls: ['../common/common.scss', './qr-code-generator.component.scss'],
})
export class QrCodeGeneratorComponent {
  // 入力欄初期値
  inputUrl: string = 'http://samehack.com/';
}
