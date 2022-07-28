import { Component } from '@angular/core';

@Component({
  selector: 'app-text-counter',
  templateUrl: './text-counter.component.html',
  styleUrls: ['../common/common.scss', './text-counter.component.scss'],
})
export class TextCounterComponent {
  /**textareaの文字 */
  inputText: string = '';
  /**textareaの文字数 */
  count: number = 0;

  counter(text: string) {
    this.count = text.length;
  }
}
