import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {LOAD_MAKES, LOAD_MODELS, LOAD_TRIMS, LOAD_TYRES, LOAD_YEARS} from '../store/actions/vehicle.action'
import {selectMakes, selectModels, selectTrims, selectTyres, selectYears} from "../store/selectors/vehicle.selector";

@Component({
  selector: 'app-fitment-container',
  templateUrl: './fitment-container.component.html',
  styleUrls: ['./fitment-container.component.scss']
})
export class FitmentContainerComponent implements OnInit {
  years$: Observable<any[]> = this.store.select(selectYears);
  makes$: Observable<any[]> = this.store.select(selectMakes);
  models$: Observable<any[]> = this.store.select(selectModels);
  trims$: Observable<any[]> = this.store.select(selectTrims);
  tyres$: Observable<any[]> = this.store.select(selectTyres);
  selectedYear!: number;
  selectedMake!: string;
  selectedModel!: string;
  selectedTrim!: string;
  selectedTyre!: string;

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.getYears();
  }

  getYears() {
    this.store.dispatch(LOAD_YEARS());
  }

  getMakes() {
    const payload = {year: this.selectedYear};
    this.store.dispatch(LOAD_MAKES(payload));
  }

  getModels() {
    const payload = {year: this.selectedYear, make: this.selectedMake};
    this.store.dispatch(LOAD_MODELS(payload));
  }

  getTrims() {
    const payload = {year: this.selectedYear, make: this.selectedMake, model: this.selectedModel};
    this.store.dispatch(LOAD_TRIMS(payload));
  }

  /************** No tyres api found **********/
  getTyres() {
    const payload = {
      year: this.selectedYear,
      make: this.selectedMake,
      model: this.selectedModel,
      trim: this.selectedTrim
    };
    this.store.dispatch(LOAD_TYRES(payload));
  }

  // Make with year (2021)
  // https://6080be3273292b0017cdbf2a.mockapi.io/makes

  // Model with year and make (Acura)
  // https://6080be3273292b0017cdbf2a.mockapi.io/models

  // Trim with year, make, model (RDX)
  // https://6080be3273292b0017cdbf2a.mockapi.io/trim

}
