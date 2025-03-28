import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SimpleIncrementComponent } from './01-simple-increment/simple-increment.component';
import { OnnchangeIncrementComponent } from './02 ngonchange-increment/onnchange-increment.component';
import { ObservableIncrementComponent } from './03-observable-increment/observable-increment.component';
import { SignalInputIncrementComponent } from './04-signal-input-increment/signal-input-increment.component';
import { SignalAsyncIncrementComponent } from './05-signal-async-increment/signal-async-increment.component';
import { AsyncIncrementComponent } from './06 async-increment/async-increment.component';
import { ManualDetectionIncrementComponent } from './07-manual-detection-increment/manual-detection-increment.component';
import { SignalEffectIncrementComponent } from './08-signal-effect-increment/signal-effect-increment.component';

@Component({
  selector: 'app-root',
  imports: [
    SimpleIncrementComponent,
    OnnchangeIncrementComponent,
    ObservableIncrementComponent,
    SignalInputIncrementComponent,
    SignalAsyncIncrementComponent,
    AsyncIncrementComponent,
    ManualDetectionIncrementComponent,
    SignalEffectIncrementComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
