import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FitmentState } from '../state/vehicle.state';
import { fitmentFeatureKey } from '../reducers/vehicle.reducer';

export const selectFitmentState = createFeatureSelector<FitmentState>(
  fitmentFeatureKey
);

export const selectYears = createSelector(
  selectFitmentState,
  (state: FitmentState) => [...state.years]
);

export const selectMakes = createSelector(
  selectFitmentState,
  (state: FitmentState) => [...state.makes]
);

export const selectModels = createSelector(
  selectFitmentState,
  (state: FitmentState) => [...state.models]
);

export const selectTrims = createSelector(
  selectFitmentState,
  (state: FitmentState) => [...state.trims]
);

export const selectTyres = createSelector(
  selectFitmentState,
  (state: FitmentState) => [...state.tyres]
);
