import { ChangeDetectionStrategy, Component } from '@angular/core';
import { OnchangeInnerComponent } from './ongonchange-inner/onchange-inner.component';

@Component({
  selector: 'app-onchange-increment',
  imports: [OnchangeInnerComponent],
  templateUrl: './onnchange-increment.component.html',
  styleUrl: './onnchange-increment.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OnnchangeIncrementComponent {
  value = 1;
}
