import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mortgage',
  templateUrl: './mortgage.component.html',
  styleUrls: ['../common/common.scss', './mortgage.component.scss'],
})
export class MortgageComponent implements OnInit {
  /**借入金額※万単位 */
  price: number = 4000;
  /**借入金額の単位 */
  MONEY_UNIT = 10000;
  /**金利※年利 */
  yearRate: number = 0.8;
  // yearRate: number = 0.795;
  /**返済年数 */
  year: number = 35;
  MONTH = 12;
  /**月々の支払金額 */
  monthlyPayment = 0;
  /**トータル金額 */
  total = 0;
  /**トータル金利 */
  totalRate = 0;

  public ngOnInit() {
    // this.monthlyPayment=
    this.calc();
    // console.log((this.price * 10000 * this.yearRate * (1 + this.yearRate) ** this.year * 35) /(1 + this.yearRate) ** this.year) -1)
  }

  calc() {
    // 支払回数
    const repaymentsCount = this.year * this.MONTH;
    // パーセント表記を変換
    const rate = this.yearRate / 100;
    // 月利
    const monthlyRate = rate / this.MONTH;

    console.log(monthlyRate);

    // 分子
    const molecule =
      this.price *
      this.MONEY_UNIT *
      monthlyRate *
      (1 + monthlyRate) ** repaymentsCount;

    // 分母
    const denominator = (1 + monthlyRate) ** repaymentsCount - 1;

    this.monthlyPayment = Math.round(molecule / denominator);
    this.total = this.monthlyPayment * repaymentsCount;
    this.totalRate = this.total - this.price * this.MONEY_UNIT;
  }
}
