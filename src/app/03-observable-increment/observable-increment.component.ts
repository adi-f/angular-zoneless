import { ChangeDetectionStrategy, Component } from '@angular/core';
import { delay, map, Subject } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-observable-increment',
  imports: [AsyncPipe],
  templateUrl: './observable-increment.component.html',
  styleUrl: './observable-increment.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ObservableIncrementComponent {
  #privateValue = 0;
  readonly increment = new Subject<void>();
  readonly value$ = this.increment.pipe(
    delay(1000),
    map(() => this.#privateValue++),
  );
}
