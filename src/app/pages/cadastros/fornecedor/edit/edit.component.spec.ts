import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFornecedorComponent } from './edit.component';

describe('EditComponent', () => {
  let component: EditFornecedorComponent;
  let fixture: ComponentFixture<EditFornecedorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditFornecedorComponent]
    });
    fixture = TestBed.createComponent(EditFornecedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
