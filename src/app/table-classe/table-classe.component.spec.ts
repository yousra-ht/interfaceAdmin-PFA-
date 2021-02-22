import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableClasseComponent } from './table-classe.component';

describe('TableClasseComponent', () => {
  let component: TableClasseComponent;
  let fixture: ComponentFixture<TableClasseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableClasseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableClasseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
