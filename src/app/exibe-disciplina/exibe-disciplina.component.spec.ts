import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExibeDisciplinaComponent } from './exibe-disciplina.component';

describe('ExibeDisciplinaComponent', () => {
  let component: ExibeDisciplinaComponent;
  let fixture: ComponentFixture<ExibeDisciplinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExibeDisciplinaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExibeDisciplinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
