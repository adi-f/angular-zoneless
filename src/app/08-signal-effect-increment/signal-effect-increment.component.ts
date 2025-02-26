import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-signal-effect-increment',
  imports: [],
  templateUrl: './signal-effect-increment.component.html',
  styleUrl: './signal-effect-increment.component.css',
})
export class SignalEffectIncrementComponent {
  value = signal(1);
  valueEffect = 0;

  constructor() {
    effect(() => (this.valueEffect = this.value()));
  }

  incrementAsync() {
    setTimeout(() => this.value.set(this.value() + 1), 1000);
  }
}
