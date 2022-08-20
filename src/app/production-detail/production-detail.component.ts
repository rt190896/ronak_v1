import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as saveAs from 'file-saver';
import { Invoice } from 'src/assets/Invoice';
import { pdfTest } from 'src/assets/PlanSheetStock';
import { FormulaService } from '../formula.service';

@Component({
  selector: 'app-production-detail',
  templateUrl: './production-detail.component.html',
  styleUrls: ['./production-detail.component.css']
})
export class ProductionDetailComponent implements OnInit {
  @ViewChild('pdfTableprint', { static: false })
  pdfTableprint!: ElementRef;
  constructor(private router: Router, private readonly route: ActivatedRoute, private readonly formula: FormulaService) { }
  invoiceId: number = 0;
  invoice: Invoice = new Invoice();
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params && params['id']) {
        this.invoiceId = params['id']
      }
      this.GetById();
    });
  }

  GetById() {
    this.formula.GetProdSlipById(this.invoiceId).subscribe((res: Invoice) => {
      this.invoice = res;
    })
  }
  print() {
    this.downloadAsPDF()
  }
  pdf: pdfTest = new pdfTest();
  public downloadAsPDF() {
    debugger;
    this.pdf.html = `<!DOCTYPE html>
    <html lang="en">
    <head>
      <title>Bootstrap 5 Example</title>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet">
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js"></script>
    </head>
    <body>`;
    this.pdf.html += this.pdfTableprint.nativeElement.innerHTML;
    this.pdf.html += `
    </body>
    </html>`
    this.formula.pdfTEst(this.pdf).subscribe((pdf) => {
      debugger;
      const bolb = new Blob([pdf], { type: "application/pdf" });
      saveAs(bolb, "rt.pdf")
    });
  }
}
