import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SignalInnerComponent } from './signal-inner/signal-inner.component';

@Component({
  selector: 'app-signal-input-increment',
  imports: [SignalInnerComponent],
  templateUrl: './signal-input-increment.component.html',
  styleUrl: './signal-input-increment.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignalInputIncrementComponent {
  value = 1;
}
