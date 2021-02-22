import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableTPComponent } from './table-tp.component';

describe('TableTPComponent', () => {
  let component: TableTPComponent;
  let fixture: ComponentFixture<TableTPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableTPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableTPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
