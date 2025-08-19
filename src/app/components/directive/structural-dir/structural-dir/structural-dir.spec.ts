import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructuralDir } from './structural-dir';

describe('StructuralDir', () => {
  let component: StructuralDir;
  let fixture: ComponentFixture<StructuralDir>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StructuralDir]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StructuralDir);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
