import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-simple-increment',
  imports: [],
  templateUrl: './simple-increment.component.html',
  styleUrl: './simple-increment.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SimpleIncrementComponent {
  value = 1;
}
