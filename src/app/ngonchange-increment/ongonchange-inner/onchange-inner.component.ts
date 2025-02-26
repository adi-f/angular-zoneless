import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-onchange-inner',
  imports: [],
  templateUrl: './onchange-inner.component.html',
  styleUrl: './onchange-inner.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OnchangeInnerComponent implements OnChanges {
  @Input({ required: true })
  valueInput = 0;
  valueOnChange = 0;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['valueInput']) {
      this.valueOnChange = this.valueInput * 2;
    }
  }
}
