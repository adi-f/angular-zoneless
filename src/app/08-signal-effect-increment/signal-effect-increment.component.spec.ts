import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalEffectIncrementComponent } from './signal-effect-increment.component';

describe('SignalEffectIncrementComponent', () => {
  let component: SignalEffectIncrementComponent;
  let fixture: ComponentFixture<SignalEffectIncrementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalEffectIncrementComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SignalEffectIncrementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
