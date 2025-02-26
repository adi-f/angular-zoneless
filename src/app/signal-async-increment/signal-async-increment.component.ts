import {Component, signal} from '@angular/core';

@Component({
  selector: 'app-signal-async-increment',
  imports: [],
  templateUrl: './signal-async-increment.component.html',
  styleUrl: './signal-async-increment.component.css'
})
export class SignalAsyncIncrementComponent {
  value = signal(1);

  incrementAsync(): void {
    setTimeout(() => this.value.set(this.value() + 1), 1000);
  }
}
