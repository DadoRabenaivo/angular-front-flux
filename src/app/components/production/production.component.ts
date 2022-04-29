import { Component, OnInit } from '@angular/core';
import { ProdProcess } from 'src/app/interfaces/prodProcess';

@Component({
  selector: 'app-production',
  templateUrl: './production.component.html',
  styleUrls: ['./production.component.css']
})
export class ProductionComponent implements OnInit {
  prodProcesses : Array<ProdProcess> = []

  constructor() { }

  ngOnInit(): void {
    this.prodProcesses.push(
      {
        Name: "Croissant",
        InStock: 84,
        MaterialName: "Micro-onde",
        MaterialUsability: "24%",
        Quantity: 54,
        QuantitySMA: 125
    },
      {
        Name: "Croissant",
        InStock: 84,
        MaterialName: "Micro-onde",
        MaterialUsability: "24%",
        Quantity: 54,
        QuantitySMA: 125
    },
      {
        Name: "Croissant",
        InStock: 84,
        MaterialName: "Micro-onde",
        MaterialUsability: "24%",
        Quantity: 54,
        QuantitySMA: 125
    },
    )
  }

}
