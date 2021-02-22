import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableFormationComponent } from './table-formation.component';


describe('TableFormationComponent', () => {
  let component: TableFormationComponent;
  let fixture: ComponentFixture<TableFormationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableFormationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
