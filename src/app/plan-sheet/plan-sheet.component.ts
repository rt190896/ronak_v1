import { Component, OnInit } from '@angular/core';
import { planSheet } from 'src/assets/PlanSheetStock';
import { ProfileType } from 'src/assets/Stock';
import { FormulaService } from '../formula.service';

@Component({
  selector: 'app-plan-sheet',
  templateUrl: './plan-sheet.component.html',
  styleUrls: ['./plan-sheet.component.css']
})
export class PlanSheetComponent implements OnInit {


  listBasePlate: planSheet[] = [];
  basePlate: planSheet = new planSheet();
  profileTypeli: ProfileType[] = [];
  thikness: number[] = [1.8, 1.9, 2.2, 2.5, 3]

  constructor(private formula: FormulaService) { }

  ngOnInit(): void {
    this.GetAllProfileType()
    this.GetAll();
  }

  ChangesProfileType(indexOfelement: any) { }

  Add() {
    this.basePlate.type = Number(this.basePlate.type);
    this.basePlate.qty = Number(this.basePlate.qty);
    this.basePlate.thikness = Number(this.basePlate.thikness);
    this.formula.AddPlansheetOrder(this.basePlate).subscribe(res => {
      this.GetAll()
    });
  }

  GetAll() {
    this.formula.GetAllPlanSheet().subscribe((res: planSheet[]) => {
      this.listBasePlate = res;
    });

  }

  GetAllProfileType() {
    this.formula.GetAllProfileType().subscribe((res: ProfileType[]) => {
      this.profileTypeli = res;
    });

  }
}
