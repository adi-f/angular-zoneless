import { Component } from '@angular/core';

@Component({
  selector: 'app-async-increment',
  imports: [],
  templateUrl: './async-increment.component.html',
  styleUrl: './async-increment.component.css'
})
export class AsyncIncrementComponent {
 valueSync = 1;
 valueAsync = 1;

  increment(): void {
   this.valueSync++;
   setTimeout(()=>this.valueAsync = this.valueSync, 1000);
 }
}
