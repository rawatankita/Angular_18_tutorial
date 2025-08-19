import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Reactive } from './reactive';

describe('Reactive', () => {
  let component: Reactive;
  let fixture: ComponentFixture<Reactive>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Reactive]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Reactive);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
