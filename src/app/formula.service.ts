import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Invoice } from 'src/assets/Invoice';
import { environment } from 'src/environments/environment';
import { ProfileType, Stock } from 'src/assets/Stock';
import { pdfTest, planSheet } from 'src/assets/PlanSheetStock';

@Injectable({ providedIn: 'root' })
export class FormulaService {

  constructor(private httpClient: HttpClient) { }

  AddProdSlip(invoice: Invoice) {
    return this.httpClient.post(environment.serverUrl + "/invoice", invoice)
  }


  AddStock(stock: Stock) {
    return this.httpClient.post(environment.serverUrl + "/stock", stock);
  }

  UpdateProdSlip(invoice: Invoice) {
    return this.httpClient.post("", invoice)
  }

  DeleteProdSlip(invoice: Invoice) {
    return this.httpClient.post("", invoice)
  }

  GetAllProdSlip() {
    return this.httpClient.get<Invoice[]>(environment.serverUrl + "/invoice");
  }
  GetProdSlipById(id: number) {
    return this.httpClient.get<Invoice>(environment.serverUrl + "/invoice/getbyid?id=" + id);
  }

  pdfTEst(html: pdfTest) {
    return this.httpClient.post(environment.serverUrl + "/BasePlate/pdfTest", html,{responseType:"arraybuffer"})
  }

  GetAllStock() {
    return this.httpClient.get<Stock[]>(environment.serverUrl + "/stock");
  }

  GetStockById(id: number) {
    return this.httpClient.get<Stock>(environment.serverUrl + "/stock/GetById?id=" + id);
  }

  DeleteStock(id: number) {
    return this.httpClient.delete(environment.serverUrl + "/stock?id=" + id);
  }

  GetAllProfileType() {
    return this.httpClient.get<ProfileType[]>(environment.serverUrl + "/profiletype");
  }


  GetProfileTypeById(id: number) {
    return this.httpClient.get<ProfileType>(environment.serverUrl + "/profiletype/GetById?id=" + id);
  }

  DeleteProfileTypeById(id: number) {
    return this.httpClient.delete(environment.serverUrl + "/profiletype/delete?id=" + id);
  }


  AddProfileType(profile: ProfileType) {
    return this.httpClient.post(environment.serverUrl + "/profiletype", profile);
  }

  AddPlansheetOrder(profile: planSheet) {
    return this.httpClient.post(environment.serverUrl + "/BasePlate", profile);
  }


  GetAllPlanSheet() {
    return this.httpClient.get<planSheet[]>(environment.serverUrl + "/BasePlate");
  }

}