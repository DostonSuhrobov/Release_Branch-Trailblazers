import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithoutpermissionComponent } from './withoutpermission.component';

describe('WithoutpermissionComponent', () => {
  let component: WithoutpermissionComponent;
  let fixture: ComponentFixture<WithoutpermissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WithoutpermissionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WithoutpermissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
