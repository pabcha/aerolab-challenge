import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSkeletonsComponent } from './card-skeletons.component';

describe('CardSkeletonsComponent', () => {
  let component: CardSkeletonsComponent;
  let fixture: ComponentFixture<CardSkeletonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardSkeletonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardSkeletonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
