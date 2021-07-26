import { createReducer, on } from '@ngrx/store';
import { Action } from '@ngrx/store';
import {
  LOAD_YEARS,
  LOAD_YEARS_SUCCESS,
  LOAD_YEARS_FAIL,
  LOAD_MAKES_SUCCESS,
  LOAD_MODELS_SUCCESS, LOAD_TRIMS_SUCCESS, LOAD_TYRES_SUCCESS
} from '../actions/vehicle.action';
import { FitmentState , initialState } from '../state/vehicle.state';

export const fitmentFeatureKey = 'fitment';

const vehicleReducer = createReducer(
  initialState,
  on(LOAD_YEARS_SUCCESS, (state, { years }) => ({ ...state, years })),
  on(LOAD_MAKES_SUCCESS, (state, { makes }) => ({ ...state, makes })),
  on(LOAD_MODELS_SUCCESS, (state, { models }) => ({ ...state, models })),
  on(LOAD_TRIMS_SUCCESS, (state, { trims }) => ({ ...state, trims })),
  on(LOAD_TYRES_SUCCESS, (state, { tyres }) => ({ ...state, tyres })),
);

export const fitmentReducer = (state: FitmentState, action: Action) =>
  vehicleReducer(state, action);
