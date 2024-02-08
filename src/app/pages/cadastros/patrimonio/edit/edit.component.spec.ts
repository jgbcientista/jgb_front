import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPatrimonioComponent } from './edit.component';

describe('EditComponent', () => {
  let component: EditPatrimonioComponent;
  let fixture: ComponentFixture<EditPatrimonioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditPatrimonioComponent]
    });
    fixture = TestBed.createComponent(EditPatrimonioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
