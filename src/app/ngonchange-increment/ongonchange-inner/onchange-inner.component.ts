import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-onchange-inner',
  imports: [],
  templateUrl: './onchange-inner.component.html',
  styleUrl: './onchange-inner.component.css'
})
export class OnchangeInnerComponent implements OnChanges {

  @Input({required: true})
  valueInput: number = 0
  valueOnChange: number = 0;

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['valueInput']) {
      this.valueOnChange = this.valueInput * 2;
    }
  }
}
