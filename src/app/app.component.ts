import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {SimpleIncrementComponent} from './simple-increment/simple-increment.component';
import {OnnchangeIncrementComponent} from './ngonchange-increment/onnchange-increment.component';
import {ObservableIncrementComponent} from './observable-increment/observable-increment.component';
import {
  SignalInputIncrementComponent
} from './signal-input-increment/signal-input-increment.component';
import {
  SignalAsyncIncrementComponent
} from './signal-async-increment/signal-async-increment.component';

@Component({
  selector: 'app-root',
  imports: [SimpleIncrementComponent, OnnchangeIncrementComponent, ObservableIncrementComponent, SignalInputIncrementComponent, SignalAsyncIncrementComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
