import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tax-calculator',
  templateUrl: './tax-calculator.component.html',
  styleUrls: ['../common/common.scss', './tax-calculator.component.scss'],
})
export class TaxCalculatorComponent implements OnInit {
  /**収入 */
  income: number = 6000000;
  /**経費 */
  expenses = 1000000;
  /**％変換 */
  PERCENT = 100;
  /**控除 */
  deduction = {
    /**合計 */
    total: 0,
    /**基礎控除 */
    basic: 480000,
    /**社会保険料控除 */
    insurance: 24000,
    /**その他の控除 */
    other: 0,
    /**帳簿 */
    ledgerList: [
      { text: '青色(e-tax)', money: 650000, isChecked: true },
      { text: '青色', money: 550000, isChecked: false },
      { text: '白色', money: 100000, isChecked: false },
    ],
    /**選択済み帳簿 */
    checkedLedger: 650000,
    /**ふるさと納税 */
    furusato: {
      /**寄附金額 */
      donation: 0,
      /**所得税還付金 */
      incomeRefund: 0,
      /**住民税控除額 */
      residentDeduction: 0,
      /**自己負担額 */
      SELF_PAY: 2000,
    },
  };

  /**課税所得 */
  taxableIncome: number;

  /**事業種別 */
  businessType = [
    { text: '第一種', rate: 5, isChecked: true },
    { text: '第二種', rate: 4, isChecked: false },
    { text: '第三種', rate: 3, isChecked: false },
  ];

  TAX = {
    /**所得税 */
    incomeTax: 0,
    /**所得税率 */
    incomeTaxRate: 0,
    /**控除額 */
    incomeTaxDeduction: 0,

    /**住民税 */
    residentTax: 0,
    /**住民税率 */
    residentTaxRate: 10,

    /**事業税 */
    business: 5,
    /**事業税率 */
    businessTypeRate: 5,
  };

  /**所得税控除額 */
  INCOME_TAX_DEDUCATION = {
    '5': 0,
    '10': 97500,
    '20': 427500,
    '23': 636000,
    '33': 153600,
    '40': 2796000,
    '45': 4796000,
  };

  public ngOnInit() {
    this.calc();
  }

  calc() {
    // ふるさと納税関連
    this.deduction.furusato.donation &&
      this.calcFurusato(this.deduction.furusato.donation);
    // 控除合計
    this.deduction.total =
      this.deduction.basic +
      this.deduction.checkedLedger +
      this.deduction.insurance;
    // 課税所得
    this.taxableIncome = this.income - this.expenses - this.deduction.total;
    // 所得税
    this.TAX.incomeTax = this.calcIncomeTax(this.taxableIncome);
    // 住民税
    this.TAX.residentTax =
      (this.taxableIncome * this.TAX.residentTaxRate) / this.PERCENT -
      this.deduction.furusato.residentDeduction;
    // 事業税
    if (this.taxableIncome >= 2900000) {
      this.TAX.business =
        (this.taxableIncome * this.TAX.businessTypeRate) / this.PERCENT;
    } else {
      this.TAX.business = 0;
      // this.TAX.businessTypeRate = 0;
    }
  }

  /**
   * 所得税計算
   * 所得税=課税所得*税率-控除額
   */
  calcIncomeTax(taxableIncome: number) {
    if (taxableIncome <= 1950000) {
      this.TAX.incomeTaxRate = 5;
      this.TAX.incomeTaxDeduction = this.INCOME_TAX_DEDUCATION[5];
    } else if (taxableIncome <= 3300000) {
      this.TAX.incomeTaxRate = 10;
      this.TAX.incomeTaxDeduction = this.INCOME_TAX_DEDUCATION[10];
    } else if (taxableIncome <= 6950000) {
      this.TAX.incomeTaxRate = 20;
      this.TAX.incomeTaxDeduction = this.INCOME_TAX_DEDUCATION[20];
    } else if (taxableIncome <= 9000000) {
      this.TAX.incomeTaxRate = 23;
      this.TAX.incomeTaxDeduction = this.INCOME_TAX_DEDUCATION[23];
    } else if (taxableIncome <= 18000000) {
      this.TAX.incomeTaxRate = 33;
      this.TAX.incomeTaxDeduction = this.INCOME_TAX_DEDUCATION[33];
    } else if (taxableIncome <= 40000000) {
      this.TAX.incomeTaxRate = 40;
      this.TAX.incomeTaxDeduction = this.INCOME_TAX_DEDUCATION[40];
    } else {
      this.TAX.incomeTaxRate = 45;
      this.TAX.incomeTaxDeduction = this.INCOME_TAX_DEDUCATION[45];
    }

    return (
      taxableIncome * (this.TAX.incomeTaxRate / this.PERCENT) -
      this.TAX.incomeTaxDeduction
    );
  }
  /**
   * ふるさと納税の計算
   * @param donation
   */
  calcFurusato(donation: number) {
    // 実質控除額 = ふるさと納税を行った金額－2,000円
    const furusatoDeduction = donation - this.deduction.furusato.SELF_PAY;
    // 所得税の還付金 = （ふるさと納税を行った金額－2,000円）×所得税率
    this.deduction.furusato.incomeRefund =
      (furusatoDeduction * this.TAX.incomeTaxRate) / this.PERCENT;
    console.log(this.deduction.furusato.incomeRefund);
    // 住民税控除 = (ふるさと納税を行った金額－2,000円) - 所得税の還付金
    this.deduction.furusato.residentDeduction =
      furusatoDeduction - this.deduction.furusato.incomeRefund;
  }

  update(type: string, value: number) {
    debugger;
    switch (type) {
      case 'income':
        this.income += value;
        break;
      case 'expenses':
        this.expenses += value;
        break;
      case 'deductionBasic':
        this.deduction.basic += value;
        break;
      case 'deductionInsurance':
        this.deduction.insurance *= value;
        break;
      case 'furusato':
        this.deduction.furusato.donation += value;
        break;
      case 'ledger':
        this.deduction.checkedLedger = value;
        break;
      case 'businessType':
        this.TAX.businessTypeRate = value;
        break;
    }
    this.calc();
  }
}
