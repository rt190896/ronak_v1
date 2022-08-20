import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasePlateDetail, Invoice, InvoiceDetail } from 'src/assets/Invoice';
import { ProfileType } from 'src/assets/Stock';
import { FormulaService } from '../formula.service';

@Component({
  selector: 'app-production-slip',
  templateUrl: './production-slip.component.html',
  styleUrls: ['./production-slip.component.css']
})
export class ProductionSlipComponent implements OnInit {
  invoice: Invoice = new Invoice();
  invoiceList: Invoice[] = [];
  profileTypeli: ProfileType[] = [];
  thinessforBasePlate: number[] = [1.8, 1.9, 2.2, 2.5, 3];
  thinessfornormal: number[] = [1, 1.2, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 2, 2.1, 2.2, 2.3];
  val: any = 0;
  constructor(private formula: FormulaService, private router: Router) { }

  ngOnInit() {
    this.GetAll();
    this.GetAllProfileType();
  }
  AddItem() {
    this.invoice.details.push(new InvoiceDetail());
  }
  ViewDetail(id: number) {
    this.router.navigateByUrl('/viewprodDetail')
  }

  Add() {

    this.invoice.details.forEach(x => {
      x.qty = Number(x.qty);
      x.length = Number(x.length);
      x.thikness = Number(x.thikness);
      x.type = Number(x.type);
      x.profileType = Number(x.profileType)
    })
    this.invoice.basePlateDetail.forEach(x => {
      x.qty = Number(x.qty);
      x.thikness = Number(x.thikness);
      x.type = Number(x.type);
    })
    this.formula.AddProdSlip(this.invoice).subscribe(res => {
      this.GetAll();
    });
  }

  GetAll() {
    this.formula.GetAllProdSlip().subscribe((res: Invoice[]) => {
      this.invoiceList = res
    });
  }

  AddBasePlateItem() {
    this.invoice.basePlateDetail.push(new BasePlateDetail());
  }
  ChangesProfileType(index: number) {
    this.invoice.details[index].profileType = Number(this.invoice.details[index].profileType);
    var data = this.profileTypeli.filter((x: ProfileType) => x.id === this.invoice.details[index].profileType);
    if (data.length > 0) {
      this.invoice.details[index].productionValue = data[0].productionValue;
      this.invoice.details[index].originalValue = data[0].originalValue;
    }

  }
  RemoveItem(index: number) {
    this.invoice.details.splice(index, 1)
  }

  GetAllProfileType() {
    this.formula.GetAllProfileType().subscribe((res: ProfileType[]) => {
      this.profileTypeli = res;
    });

  }


}
