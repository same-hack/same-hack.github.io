import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qr-code-generator',
  templateUrl: './qr-code-generator.component.html',
  styleUrls: ['../common/common.scss', './qr-code-generator.component.scss'],
})
export class QrCodeGeneratorComponent implements OnInit {
  targetUrl: string = '';
  qrcode = '';

  qrcodeGenerate(url: string) {
    this.qrcode = url;
  }
  constructor() {}

  ngOnInit(): void {}
}
