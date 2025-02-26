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
  selector: 'app-manuel-detection-increment',
  imports: [],
  templateUrl: './manuel-detection-increment.component.html',
  styleUrl: './manuel-detection-increment.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ManuelDetectionIncrementComponent {
  value = 1;
  changeDetectorRef = inject(ChangeDetectorRef);

  constructor() {
    const incrementBtn =
      viewChild.required<ElementRef<HTMLButtonElement>>('incrementBtn');
    const markForCheckBtn =
      viewChild.required<ElementRef<HTMLButtonElement>>('markForCheckBtn');
    const detectBtn =
      viewChild.required<ElementRef<HTMLButtonElement>>('detectBtn');

    effect(() =>
      incrementBtn()!.nativeElement!.addEventListener('click', () =>
        this.#increment(),
      ),
    );
    effect(() =>
      markForCheckBtn()!.nativeElement!.addEventListener('click', () =>
        this.#markForCheck(),
      ),
    );
    effect(() =>
      detectBtn()!.nativeElement!.addEventListener('click', () =>
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
