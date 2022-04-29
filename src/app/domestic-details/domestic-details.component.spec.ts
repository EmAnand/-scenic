import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomesticDetailsComponent } from './domestic-details.component';

describe('DomesticDetailsComponent', () => {
  let component: DomesticDetailsComponent;
  let fixture: ComponentFixture<DomesticDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DomesticDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DomesticDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
