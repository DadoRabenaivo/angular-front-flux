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

  constructor(private productionService : ProductionService) { }

  ngOnInit(): void {
    this.productionService.getProductProcesses().subscribe((results) => {
      console.log(results);
      return this.prodProcesses = [...results];
    });
  }

}
