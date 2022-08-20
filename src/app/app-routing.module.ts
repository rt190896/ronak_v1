import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileType } from 'src/assets/Stock';
import { PlanSheetComponent } from './plan-sheet/plan-sheet.component';
import { ProductionDetailComponent } from './production-detail/production-detail.component';
import { ProductionSlipComponent } from './production-slip/production-slip.component';
import { ProfileTypeComponent } from './profile-type/profile-type.component';
import { StockSlipComponent } from './stock-slip/stock-slip.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'stock' },
  { path: 'productionslip', component: ProductionSlipComponent },
  { path: 'stock', component: StockSlipComponent },
  { path: 'ptofileType', component: ProfileTypeComponent },
  { path: 'plansheet', component: PlanSheetComponent },
  { path: 'viewprodDetail/:id', component: ProductionDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
