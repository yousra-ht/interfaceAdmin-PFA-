import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTpComponent } from './create-tp.component';

describe('CreateTpComponent', () => {
  let component: CreateTpComponent;
  let fixture: ComponentFixture<CreateTpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateTpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
