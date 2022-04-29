import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternationaPackageComponent } from './internationa-package.component';

describe('InternationaPackageComponent', () => {
  let component: InternationaPackageComponent;
  let fixture: ComponentFixture<InternationaPackageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternationaPackageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternationaPackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
