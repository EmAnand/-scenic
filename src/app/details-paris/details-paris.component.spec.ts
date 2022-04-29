import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsParisComponent } from './details-paris.component';

describe('DetailsParisComponent', () => {
  let component: DetailsParisComponent;
  let fixture: ComponentFixture<DetailsParisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsParisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsParisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
