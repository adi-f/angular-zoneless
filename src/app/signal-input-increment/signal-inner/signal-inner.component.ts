import {ChangeDetectionStrategy, Component, computed, input} from '@angular/core';

@Component({
  selector: 'app-signal-inner',
  imports: [],
  templateUrl: './signal-inner.component.html',
  styleUrl: './signal-inner.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignalInnerComponent {
  inputValue = input.required<number>();
  doubleValue = computed(() => this.inputValue() * 2);
}
