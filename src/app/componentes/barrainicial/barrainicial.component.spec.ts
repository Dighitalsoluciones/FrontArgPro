import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarrainicialComponent } from './barrainicial.component';

describe('BarrainicialComponent', () => {
  let component: BarrainicialComponent;
  let fixture: ComponentFixture<BarrainicialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarrainicialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarrainicialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
