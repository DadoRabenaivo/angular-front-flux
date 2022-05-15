import { Component, OnInit } from '@angular/core';
import { ProdProcess } from 'src/app/interfaces/prodProcess';
import { Request } from 'src/app/interfaces/request';
import { MessagingService } from 'src/app/services/messaging.service';
import { ProductionService } from 'src/app/services/production.service';
import { UserService } from 'src/app/services/user.service';

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
  constructor(private productionService : ProductionService, private messagingService : MessagingService, private authService : UserService) { }

  selectProdProcess(id: number) {
    this.selectedProdProcess = this.prodProcesses.find(p => p.Id == id)!;
  }

  updateProdProcess(newProdProcess: ProdProcess) {
    this.productionService.updateProductProcesses(newProdProcess).subscribe((res) => {
      this.prodProcesses.map((process) => {
        if (process.Id == newProdProcess.Id) {
          process.InStock = newProdProcess.InStock;
          process.Name = newProdProcess.Name;
        }
      })
    });
  }

  sendReplacementRequest(equipment : any) {
    console.log("Replacing equipment : " + equipment.Name + " for product : " + this.selectedProdProcess.Name);
    let newRequest: Request = {
      Message: `Besoin de remplacement du matériel : ${equipment.Name} pour la production de ${this.selectedProdProcess.Name}`,
      SendToId: 2,
      SenderId: this.authService.authenticatedUser ? this.authService.authenticatedUser.Id : 1 
    };
    this.messagingService.sendRequest(newRequest).subscribe();
  }

  ngOnInit(): void {
    this.productionService.getProductProcesses().subscribe((results) => {
      return this.prodProcesses = [...results];
    });
  }

}
