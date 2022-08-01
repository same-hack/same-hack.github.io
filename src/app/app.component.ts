import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'my-angular';
  // ヘッダを非表示にする
  hiddenPath: string[] = ['/clock'];
  hidden: boolean = false;
  constructor(public router: Router) {}
  ngOnInit() {
    this.router.events
      .pipe(filter((f) => f instanceof NavigationEnd))
      .subscribe((s: any) => {
        this.hidden = this.hiddenPath.some((e) => s.url.includes(e));
      });
  }
}
