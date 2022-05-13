import { Component, OnInit } from '@angular/core';
import { ProdProcess } from 'src/app/interfaces/prodProcess';
import { ProductionService } from 'src/app/services/production.service';

@Component({
  selector: 'app-production',
  templateUrl: './production.component.html',
  styleUrls: ['./production.component.css']
})
export class ProductionComponent implements OnInit {
  prodProcesses : Array<ProdProcess> = []
  selectedProdProcess : ProdProcess = {
    Id: 0,
    Name: '',
    InStock: 0,
    Equipments: [],
    Quantity: 0,
    QuantitySMA: 0
  };
  constructor(private productionService : ProductionService) { }

  selectProdProcess(id: number) {
    this.selectedProdProcess = this.prodProcesses.find(p => p.Id == id)!;
  }

  ngOnInit(): void {
    this.productionService.getProductProcesses().subscribe((results) => {
      return this.prodProcesses = [...results];
    });
  }

}
