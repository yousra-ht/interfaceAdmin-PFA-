import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasseEtudiantComponent } from './classe-etudiant.component';

describe('ClasseEtudiantComponent', () => {
  let component: ClasseEtudiantComponent;
  let fixture: ComponentFixture<ClasseEtudiantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClasseEtudiantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClasseEtudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
