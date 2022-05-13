import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';
import { ProdProcess } from '../../../interfaces/prodProcess';

@Component({
  selector: 'app-prod-process-editor',
  templateUrl: './prod-process-editor.component.html',
  styleUrls: ['./prod-process-editor.component.css']
})
export class ProdProcessEditorComponent implements OnInit {
  @Input() prodProcess? : ProdProcess;

  prodProcessForm = this.formBuilder.group({
    Name: [''],
    InStock: 0,
    Equipments: this.formBuilder.array([
      this.formBuilder.group({
        Name: [''],
        Usability: 0
      })
    ]),
    Quantity: 0,
    QuantitySMA: 0
  })

  constructor(private formBuilder : FormBuilder) { }

  get Equipments() {
    return this.prodProcessForm.get('Equipments') as FormArray;
  }

  addEquipment() {
    this.Equipments.push(
      this.formBuilder.group({
        Name: [''],
        Usability: 0
      })
    );
  }

  ngOnInit(): void {
    if (this.prodProcess) {
      console.log(this.prodProcess)
      this.prodProcessForm.setValue(
        {
          Name: this.prodProcess.Name,
          InStock: this.prodProcess.InStock,
          Equipments: () => {
            let eqs = {};
            for (let i=0; i< this.prodProcess!.Equipments.length; i++) {
              (eqs as any)[i] = this.prodProcess!.Equipments[i];
            }
            return eqs;
          },
          Quantity: this.prodProcess.Quantity,
          QuantitySMA: this.prodProcess.QuantitySMA
        }
      )
    }
  }

}
