import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivisionSearchComponent } from './division-search.component';

describe('DivisionSearchComponent', () => {
  let component: DivisionSearchComponent;
  let fixture: ComponentFixture<DivisionSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DivisionSearchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DivisionSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
