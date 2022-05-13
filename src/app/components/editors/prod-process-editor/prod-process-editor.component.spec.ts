import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdProcessEditorComponent } from './prod-process-editor.component';

describe('ProdProcessEditorComponent', () => {
  let component: ProdProcessEditorComponent;
  let fixture: ComponentFixture<ProdProcessEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdProcessEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdProcessEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
