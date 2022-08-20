import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Stock } from 'src/assets/Stock';
import { FormulaService } from '../formula.service';
import { jsPDF } from "jspdf";
import { FileSaverService } from 'ngx-filesaver';
import * as FileSaver from 'file-saver';
import { saveAs } from 'file-saver';
import { elementAt } from 'rxjs';
import { pdfTest, ResponseModel } from 'src/assets/PlanSheetStock';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-stock-slip',
  templateUrl: './stock-slip.component.html',
  styleUrls: ['./stock-slip.component.css']
})
export class StockSlipComponent implements OnInit {
  stock: Stock = new Stock();
  stockList: Stock[] = [];

  @ViewChild('pdfTableprint', { static: false })
  pdfTableprint!: ElementRef;
  isActice = false;

  constructor(private formulaService: FormulaService, private toaster: ToastrService) { }

  ngOnInit() {
    this.getAll();
  }

  Add() {
    this.stock.length = Number(this.stock.length);
    this.stock.type = Number(this.stock.type);
    this.stock.width = Number(this.stock.width);
    this.stock.thikness = Number(this.stock.thikness);
    this.formulaService.AddStock(this.stock).subscribe((res: ResponseModel) => {
      this.getAll();
      this.toaster.success(res.message);
    });
  }

  getAll() {
    this.formulaService.GetAllStock().subscribe((res: Stock[]) => {
      this.stockList = res
    });
  }

  Edit(id: number) {
    this.formulaService.GetStockById(id).subscribe((res: Stock) => {
      this.stock = res
    });
  }

  Delete(id: number) {
    this.formulaService.DeleteStock(id).subscribe((res: ResponseModel) => {
      this.toaster.success(res.message);
      this.getAll();
    });
  }
  pdf: pdfTest = new pdfTest();
  public downloadAsPDF() {
    this.pdf.html = `<!DOCTYPE html>
    <html lang="en">
    <head>
      <title>Bootstrap 5 Example</title>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
    </head>
    <body>`;
    this.pdf.html += this.pdfTableprint.nativeElement.innerHTML;
    this.pdf.html += `
    </body>
    </html>`
    this.formulaService.pdfTEst(this.pdf).subscribe((pdf) => {
      debugger;
      const bolb = new Blob([pdf], { type: "application/pdf" });
      saveAs(bolb, "rt.pdf")
    });
  }
}
