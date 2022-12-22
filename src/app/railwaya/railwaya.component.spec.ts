import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RailwayaComponent } from './railwaya.component';

describe('RailwayaComponent', () => {
  let component: RailwayaComponent;
  let fixture: ComponentFixture<RailwayaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RailwayaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RailwayaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
