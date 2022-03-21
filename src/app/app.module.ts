import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule} from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FontAwesomeModule,FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MarketingComponent } from './components/marketing/marketing.component';
import { ProductionComponent } from './components/production/production.component';
import { LogistiqueComponent } from './components/logistique/logistique.component';
import { StockComponent } from './components/stock/stock.component';
import { HistoriqueComponent } from './components/historique/historique.component';
import { NotificationComponent } from './components/notification/notification.component';
import { FormsModule } from '@angular/forms';



const routes: Routes = [
  {path:'',component: LoginComponent},
  { path: 'marketing', component: MarketingComponent },
  { path: 'stock', component: StockComponent },
  { path: 'logistique', component: LogistiqueComponent },
  { path: 'production', component: ProductionComponent },
  { path: 'historique', component: HistoriqueComponent },
  { path: 'notification', component: NotificationComponent },

]
@NgModule({
  declarations: [
    AppComponent, 
    LoginComponent, NavbarComponent, MarketingComponent, ProductionComponent, LogistiqueComponent, StockComponent, HistoriqueComponent, NotificationComponent
  ],
  imports: [
    BrowserModule,
    [RouterModule.forRoot(routes)],
    FontAwesomeModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(library:FaIconLibrary){
    library.addIconPacks(fas,far);
  };
}