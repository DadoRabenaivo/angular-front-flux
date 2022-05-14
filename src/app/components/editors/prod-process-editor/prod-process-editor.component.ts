import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';
import { ProdProcess } from '../../../interfaces/prodProcess';

@Component({
  selector: 'app-prod-process-editor',
  templateUrl: './prod-process-editor.component.html',
  styleUrls: ['./prod-process-editor.component.css']
})
export class ProdProcessEditorComponent implements OnInit, OnChanges {
  @Input() prodProcess? : ProdProcess;
  @Output() saveProdProcessEvent = new EventEmitter<ProdProcess>(); 

  prodProcessForm = this.formBuilder.group({
    Name: [''],
    InStock: 0,
    Equipments: this.formBuilder.array([
      this.formBuilder.group({
        Name: '',
        Usability: 100
      })
    ]),
    Quantity: 0,
    QuantitySMA: 0
  })

  constructor(private formBuilder : FormBuilder) { }

  get Equipments() {
    return this.prodProcessForm.get('Equipments') as FormArray;
  }

  addEquipment(equipment = {Name: '', Usability: 100}) {
    this.Equipments.push(this.formBuilder.group
      (equipment)
    );
  }

  setForm(): void {
    if (this.prodProcess) {
      this.prodProcessForm.patchValue({
          Name: this.prodProcess.Name,
          InStock: this.prodProcess.InStock,
          Equipments: [],
          Quantity: this.prodProcess.Quantity,
          QuantitySMA: this.prodProcess.QuantitySMA
        });
      this.Equipments.clear();
      for (let equipment of this.prodProcess.Equipments) {
        this.addEquipment(equipment);
      }

    }
  }

  saveChanges() {
    this.saveProdProcessEvent.emit(this.prodProcessForm.value);
  }

  ngOnChanges() {
    this.setForm();
  }

  ngOnInit(): void {
  }

}
