import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-counter',
  templateUrl: './text-counter.component.html',
  styleUrls: ['../common/common.scss', './text-counter.component.scss'],
})
export class TextCounterComponent implements OnInit {
  inputText: string = '';
  count: number = 0;

  counter(text: string) {
    this.count = text.length;
  }

  constructor() {}

  ngOnInit(): void {}
}
