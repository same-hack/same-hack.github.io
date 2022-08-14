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
  /**返済年数 */
  year: number = 35;
  MONTH = 12;
  /**月々の支払金額 */
  monthlyPayment: string = '0';
  /**トータル金額 */
  total: string = '0';
  /**トータル金利 */
  totalRate: string = '0';

  public ngOnInit() {
    this.calc();
  }

  calc() {
    // 支払回数
    const repaymentsCount = this.year * this.MONTH;
    // パーセント表記を変換
    const rate = this.yearRate / 100;
    // 月利
    const monthlyRate = rate / this.MONTH;

    // 分子
    const molecule =
      this.price *
      this.MONEY_UNIT *
      monthlyRate *
      (1 + monthlyRate) ** repaymentsCount;

    // 分母
    const denominator = (1 + monthlyRate) ** repaymentsCount - 1;

    // 月々の支払い
    const monthlyPayment = Math.round(molecule / denominator);
    // トータル金額
    const total = monthlyPayment * repaymentsCount;
    // トータル金利
    const totalRate = total - this.price * this.MONEY_UNIT;

    this.monthlyPayment = monthlyPayment.toLocaleString();
    this.total = total.toLocaleString();
    this.totalRate = totalRate.toLocaleString();
  }

  update(type: string, value: number) {
    switch (type) {
      case 'price':
        this.price += value;
        break;
      case 'yearRate':
        const yR = this.yearRate + value;
        this.yearRate = Math.round(yR * 100) / 100;
        break;
      case 'year':
        this.year += value;
        break;
    }

    this.calc();
  }
}
