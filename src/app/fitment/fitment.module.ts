import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FitmentContainerComponent } from './fitment-container/fitment-container.component';
import {StoreModule} from "@ngrx/store";
import {fitmentFeatureKey, fitmentReducer} from "./store/reducers/vehicle.reducer";
import {EffectsModule} from "@ngrx/effects";
import {VehicleEffects} from "./store/effects/vehicle.effects";
import {MaterialModule} from "../material/material.module";
import {MatButtonModule} from "@angular/material/button";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    FitmentContainerComponent
  ],
  exports: [
    FitmentContainerComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    StoreModule.forFeature(fitmentFeatureKey, fitmentReducer),
    EffectsModule.forFeature([VehicleEffects]),
    MatButtonModule,
    FormsModule
  ]
})
export class FitmentModule { }
