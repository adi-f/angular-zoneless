import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  effect,
  ElementRef,
  inject,
  viewChild,
} from '@angular/core';

@Component({
  selector: 'app-manual-detection-increment',
  imports: [],
  templateUrl: './manual-detection-increment.component.html',
  styleUrl: './manual-detection-increment.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ManualDetectionIncrementComponent {
  value = 1;
  changeDetectorRef = inject(ChangeDetectorRef);

  incrementBtn =
    viewChild.required<ElementRef<HTMLButtonElement>>('incrementBtn');
  markForCheckBtn =
    viewChild.required<ElementRef<HTMLButtonElement>>('markForCheckBtn');
  detectBtn = viewChild.required<ElementRef<HTMLButtonElement>>('detectBtn');

  constructor() {
    effect(() =>
      this.incrementBtn()!.nativeElement!.addEventListener('click', () =>
        this.#increment(),
      ),
    );
    effect(() =>
      this.markForCheckBtn()!.nativeElement!.addEventListener('click', () =>
        this.#markForCheck(),
      ),
    );
    effect(() =>
      this.detectBtn()!.nativeElement!.addEventListener('click', () =>
        this.#detect(),
      ),
    );
  }

  #increment() {
    this.value++;
  }

  #markForCheck() {
    this.changeDetectorRef.markForCheck();
  }

  #detect() {
    this.changeDetectorRef.detectChanges();
  }
}
