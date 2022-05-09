import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveSportsComponent } from './live-sports.component';

describe('LiveSportsComponent', () => {
  let component: LiveSportsComponent;
  let fixture: ComponentFixture<LiveSportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiveSportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveSportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
