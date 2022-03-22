import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Equipment } from 'src/app/interfaces/equipment';
import { LogistiqueService } from 'src/app/services/logistique.service';

@Component({
  selector: 'app-logistique',
  templateUrl: './logistique.component.html',
  styleUrls: ['./logistique.component.css']
})
export class LogistiqueComponent implements OnInit {

  equipments: Array<Equipment> = [];

  constructor(private logistiqueService: LogistiqueService) { 
   }

  ngOnInit(): void {
    this.logistiqueService.getEquipments().subscribe(
      (data) => {
        this.equipments = data;
      }  
    )
  }  
}
