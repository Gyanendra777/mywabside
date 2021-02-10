import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TYPESCRIPTComponent } from './typescript.component';

describe('TYPESCRIPTComponent', () => {
  let component: TYPESCRIPTComponent;
  let fixture: ComponentFixture<TYPESCRIPTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TYPESCRIPTComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TYPESCRIPTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
