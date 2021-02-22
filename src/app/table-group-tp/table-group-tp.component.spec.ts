import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableGroupTPComponent } from './table-group-tp.component';

describe('TableGroupTPComponent', () => {
  let component: TableGroupTPComponent;
  let fixture: ComponentFixture<TableGroupTPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableGroupTPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableGroupTPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
