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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from 'src/auth/auth.guard';
import { DataTablesModule } from "angular-datatables";
import { ProdProcessEditorComponent } from './components/editors/prod-process-editor/prod-process-editor.component';


const routes: Routes = [
  {path:'',component: LoginComponent},
  { path: 'marketing', component: MarketingComponent, canActivate: [] },
  { path: 'stock', component: StockComponent, canActivate: [] },
  { path: 'logistique', component: LogistiqueComponent, canActivate: [] },
  { path: 'production', component: ProductionComponent, canActivate: [] },
  { path: 'historique', component: HistoriqueComponent, canActivate: [] },
  { path: 'notification', component: NotificationComponent, canActivate: [] },

]
@NgModule({
  declarations: [
    AppComponent, 
    LoginComponent, NavbarComponent, MarketingComponent, ProductionComponent, LogistiqueComponent, StockComponent, HistoriqueComponent, NotificationComponent, ProdProcessEditorComponent
  ],
  imports: [
    BrowserModule,
    [RouterModule.forRoot(routes)],
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    DataTablesModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(library:FaIconLibrary){
    library.addIconPacks(fas,far);
  };
}