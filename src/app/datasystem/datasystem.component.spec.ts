import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatasystemComponent } from './datasystem.component';

describe('DatasystemComponent', () => {
  let component: DatasystemComponent;
  let fixture: ComponentFixture<DatasystemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DatasystemComponent]
    });
    fixture = TestBed.createComponent(DatasystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
