import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Equipment } from 'src/app/interfaces/equipment';
import { EquipmentService } from 'src/app/services/equipment.service';

@Component({
  selector: 'app-logistique',
  templateUrl: './logistique.component.html',
  styleUrls: ['./logistique.component.css']
})
export class LogistiqueComponent implements OnInit {

  equipments: Array<Equipment> = [];

  constructor(private equipmentService: EquipmentService) { 
   }

  ngOnInit(): void {
    this.equipmentService.getEquipments().subscribe(
      (data) => {
        this.equipments = data;
      }  
    )
  }  
}
