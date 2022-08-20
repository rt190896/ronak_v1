import { Component, OnInit } from '@angular/core';
import { ProfileType } from 'src/assets/Stock';
import { FormulaService } from '../formula.service';

@Component({
  selector: 'app-profile-type',
  templateUrl: './profile-type.component.html',
  styleUrls: ['./profile-type.component.css']
})
export class ProfileTypeComponent implements OnInit {

  profileTypeList: ProfileType[] = [];
  profileType: ProfileType = new ProfileType()
  constructor(private readonly formula: FormulaService) { }

  ngOnInit(): void {
    this.GetAll();
  }

  Add() {
    this.profileType.originalValue = Number(this.profileType.originalValue);
    this.profileType.productionValue = Number(this.profileType.productionValue);
    this.formula.AddProfileType(this.profileType).subscribe(res => {
      this.GetAll();
    });
  }

  GetAll() {
    this.formula.GetAllProfileType().subscribe((res: ProfileType[]) => {
      this.profileTypeList = res;
    });
  }

  Edit(id: number) {
    this.formula.GetProfileTypeById(id).subscribe(res => {
      this.profileType = res;
    });

  }
  Delete(id: number) {
    this.formula.DeleteProfileTypeById(id).subscribe(res => {
      this.GetAll();
     });
  }
}
