import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss'],
})
export class ClockComponent implements OnInit {
  clock: string = '';
  bgStyle: string = '';

  // myFunc() {
  updateTime() {
    //   //現在の日付・時刻を取得
    let date = new Date();
    console.log(date);

    // 現在の時刻
    this.clock =
      this.zeroPadding(date.getHours(), 2) +
      ':' +
      this.zeroPadding(date.getMinutes(), 2);
  }

  constructor() {}

  public ngOnInit() {
    this.updateTime();
    // ファイル名
    const fileName = this.backgroundSetting(18);
    this.bgStyle = 'background-image: url("../../images/1.jpg")';
    console.log(this.bgStyle);
    // this.bgStyle = `background:url("${fileName}") center / cover`;

    setInterval(() => {
      this.updateTime();
    }, 1000);
  }

  /**
   * 背景画像をランダムで設定
   * @param {int} number 画像ファイル数
   * @returns {string} ファイルパス
   */
  backgroundSetting(number: number) {
    const numberOfImage = Math.floor(Math.random() * number + 1);
    return `../../images/${numberOfImage}.jpg`;
  }

  // 背景画像を差し替える
  // $(".container").css("background", "url(" + fileName + ") center / cover");

  /**
   * 指定した桁数に0埋めする関数
   * @param {int} num 対象の数値
   * @param {int} zeroLength 埋めたい0の数
   * @return {String} 0埋めされた文字列
   */
  zeroPadding(num: number, zeroLength: number) {
    let zero = '';

    // zeroLength個の"0"をつける
    for (let i = 0; i < zeroLength; i++) {
      zero += '0';
    }

    // numの前に指定した数の"0"をつけ、末尾の文字数を削る
    return (zero + num).slice(-zeroLength);
  }
}
