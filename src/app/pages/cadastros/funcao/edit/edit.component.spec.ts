import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFuncaoComponent } from './edit.component';

describe('EditComponent', () => {
  let component: EditFuncaoComponent;
  let fixture: ComponentFixture<EditFuncaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditFuncaoComponent]
    });
    fixture = TestBed.createComponent(EditFuncaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
