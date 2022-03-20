import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule,FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { LoginComponent } from './components/login/login.component';
import { NavbarLogistiqueComponent } from './components/logistique/navbar-logistique/navbar-logistique.component';
import { HistoriqueLogistiqueComponent } from './components/logistique/historique-logistique/historique-logistique.component';
import { NotificationLogistiqueComponent } from './components/logistique/notification-logistique/notification-logistique.component';
import { MaterielLogistiqueComponent } from './components/logistique/materiel-logistique/materiel-logistique.component';
import { NavbarMarketingComponent } from './components/marketing/navbar-marketing/navbar-marketing.component';
import { HistoriqueMarketingComponent } from './components/marketing/historique-marketing/historique-marketing.component';
import { NotificationMarketingComponent } from './components/marketing/notification-marketing/notification-marketing.component';
import { AllProduitMarketingComponent } from './components/marketing/all-produit-marketing/all-produit-marketing.component';
import { NavbarProduitComponent } from './components/production/navbar-produit/navbar-produit.component';
import { HistoriqueProduitComponent } from './components/production/historique-produit/historique-produit.component';
import { NotificationProduitComponent } from './components/production/notification-produit/notification-produit.component';
import { AllMaterielProduitComponent } from './components/production/all-materiel-produit/all-materiel-produit.component';
import { NavbarStockComponent } from './components/stock/navbar-stock/navbar-stock.component';
import { NotificationStockComponent } from './components/stock/notification-stock/notification-stock.component';
import { HistoriqueStockComponent } from './components/stock/historique-stock/historique-stock.component';
import { AllMaterielStockComponent } from './components/stock/all-materiel-stock/all-materiel-stock.component';
import { AllProduitStockComponent } from './components/stock/all-produit-stock/all-produit-stock.component';


@NgModule({
  declarations: [
    AppComponent, 
    routingComponents, LoginComponent, NavbarLogistiqueComponent, HistoriqueLogistiqueComponent, NotificationLogistiqueComponent, MaterielLogistiqueComponent, NavbarMarketingComponent, HistoriqueMarketingComponent, NotificationMarketingComponent, AllProduitMarketingComponent, NavbarProduitComponent, HistoriqueProduitComponent, NotificationProduitComponent, AllMaterielProduitComponent, NavbarStockComponent, NotificationStockComponent, HistoriqueStockComponent, AllMaterielStockComponent, AllProduitStockComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(library:FaIconLibrary){
    library.addIconPacks(fas,far);
  };
}
