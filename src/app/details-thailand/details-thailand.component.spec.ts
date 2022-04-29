import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsThailandComponent } from './details-thailand.component';

describe('DetailsThailandComponent', () => {
  let component: DetailsThailandComponent;
  let fixture: ComponentFixture<DetailsThailandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsThailandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsThailandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
