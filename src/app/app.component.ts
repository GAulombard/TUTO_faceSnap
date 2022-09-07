import { Component } from '@angular/core';
import { filter, interval, map, Observable, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  interval$!: Observable<string>;

  ngOnInit() {
    this.interval$ = interval(1000).pipe(
      filter(value => value % 3 === 0),
      map(value => value % 2 === 0 ?
        `je suis ${value} et je suis pair` :
        `je suis ${value} et je suis impair`),
        tap(text => this.logger(text))
    );
  }

  logger(text: string): void {
    console.log(`Log: ${text}`);
}

}
