import {createAction, props} from '@ngrx/store';

export const LOAD_YEARS = createAction(
  '[YEAR] - Load YEARS'
);

/// need to implement failure cases
export const LOAD_YEARS_FAIL = createAction(
  '[YEAR] - Load Years Failure',
  props<{ payload: any }>()
);

export const LOAD_YEARS_SUCCESS = createAction(
  '[YEAR] - Load Years Success',
  props<{ years: any }>()
);

export const LOAD_MAKES = createAction(
  '[MAKE] - Load MAKES',
  props<{ year: number }>()
);

export const LOAD_MAKES_SUCCESS = createAction(
  '[MAKE] - Load MAKES Success',
  props<{ makes: any }>()
);

export const LOAD_MAKES_FAIL = createAction(
  '[MAKE] - Load MAKES Fail',
  props<{ payload: any }>()
);

export const LOAD_MODELS = createAction(
  '[MODELS] - Load MODELS',
  props<{ year: number, make: string }>()
);

export const LOAD_MODELS_SUCCESS = createAction(
  '[MODELS] - Load MODELS Success',
  props<{ models: any }>()
);

export const LOAD_MODELS_FAIL = createAction(
  '[MODELS] - Load MODELS Fail',
  props<{ payload: any }>()
);

export const LOAD_TRIMS = createAction(
  '[TRIMS] - Load TRIMS',
  props<{ year: number, make: string, model: string }>()
);

export const LOAD_TRIMS_SUCCESS = createAction(
  '[TRIMS] - Load TRIMS Success',
  props<{ trims: any }>()
);

export const LOAD_TRIMS_FAIL = createAction(
  '[TRIMS] - Load TRIMS Fail',
  props<{ payload: any }>()
);

export const LOAD_TYRES = createAction(
  '[TYRES] - Load TYRES',
  props<{ year: number, make: string, model: string, trim: string }>()
);

export const LOAD_TYRES_SUCCESS = createAction(
  '[TYRES] - Load TRIMS Success',
  props<{ tyres: any }>()
);

export const LOAD_TYRES_FAIL = createAction(
  '[TYRES] - Load TYRES Fail',
  props<{ payload: any }>()
);
