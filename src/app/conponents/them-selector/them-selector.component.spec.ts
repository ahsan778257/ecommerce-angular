import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemSelectorComponent } from './them-selector.component';

describe('ThemSelectorComponent', () => {
  let component: ThemSelectorComponent;
  let fixture: ComponentFixture<ThemSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemSelectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThemSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
