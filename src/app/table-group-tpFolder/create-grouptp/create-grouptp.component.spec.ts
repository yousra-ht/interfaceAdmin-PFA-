import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateGrouptpComponent } from './create-grouptp.component';

describe('CreateGrouptpComponent', () => {
  let component: CreateGrouptpComponent;
  let fixture: ComponentFixture<CreateGrouptpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateGrouptpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateGrouptpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
