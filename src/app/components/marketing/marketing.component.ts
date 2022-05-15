import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/interfaces/client';
import { Product } from 'src/app/interfaces/product';
import { ProductDetail } from 'src/app/interfaces/productDetail';
import { MarketingService } from 'src/app/services/marketing.service';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-marketing',
  templateUrl: './marketing.component.html',
  styleUrls: ['./marketing.component.css']
})
export class MarketingComponent implements OnInit {

  clients : Client[] = [];
  productDetails : ProductDetail[] = [];

  constructor(private marketingService: MarketingService) { }

  ngOnInit(): void {
    this.fetchClients();
    this.fetchProducts();
    // this.products.push(
    //   {'Name': 'Chocolatine','Score': '30', 'Price': 3000.00, 'InStock': 24}
    // );
    // this.clients.push(
    //   {'Region': 'Analamanga', 'Age': 24,'Sex': 'Homme','PreferedProduct': 'Chocolatine'}
    // )
  }

  fetchClients() {
    this.marketingService.getClients().subscribe(
      (data) => {
        this.clients = data;
      }
    )
  }

  fetchProducts() {
    this.marketingService.getProducts().subscribe(
      (data) => {
        this.productDetails = data;
      }
    )
  }

}
