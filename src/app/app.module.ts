import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductionSlipComponent } from './production-slip/production-slip.component';
import { StockSlipComponent } from './stock-slip/stock-slip.component';
import { ProfileTypeComponent } from './profile-type/profile-type.component';
import { PlanSheetComponent } from './plan-sheet/plan-sheet.component';
import { ProductionDetailComponent } from './production-detail/production-detail.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ProductionSlipComponent,
    StockSlipComponent,
    ProfileTypeComponent,
    PlanSheetComponent,
    ProductionDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
