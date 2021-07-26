import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { HttpService } from '../../../services/http/http.service';
import {
  LOAD_MAKES,
  LOAD_MAKES_FAIL,
  LOAD_MAKES_SUCCESS, LOAD_MODELS,
  LOAD_MODELS_SUCCESS,
  LOAD_TRIMS,
  LOAD_TRIMS_FAIL,
  LOAD_TRIMS_SUCCESS,
  LOAD_TYRES,
  LOAD_TYRES_SUCCESS,
  LOAD_YEARS,
  LOAD_YEARS_FAIL,
  LOAD_YEARS_SUCCESS
} from '../actions/vehicle.action';

@Injectable()
export class VehicleEffects {
  constructor(private actions$: Actions, private httpService: HttpService) {
  }

  loadYears$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LOAD_YEARS),
      mergeMap((action) =>
        this.httpService.getYears().pipe(
          map(
            (yearsRes: any) =>
              LOAD_YEARS_SUCCESS({
                years: yearsRes.year
              }),
            catchError((err, caught) => {
              LOAD_YEARS_FAIL({
                payload: err
              });
              return  EMPTY })
          )
        )
      )
    )
  );

  loadMakes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LOAD_MAKES),
      mergeMap((action) =>
        this.httpService.getMakes().pipe(
          map(
            (makesRes: any) =>
              LOAD_MAKES_SUCCESS({
                makes: makesRes.make
              }),
            catchError((err, caught) => {
              LOAD_MAKES_FAIL({
                payload: err
              });
              return  EMPTY })
          )
        )
      )
    )
  );

  loadModels$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LOAD_MODELS),
      mergeMap((action) =>
        this.httpService.getModels().pipe(
          map(
            (makesRes: any) =>
              LOAD_MODELS_SUCCESS({
                models: makesRes.model
              }),
            catchError((err, caught) => {
              LOAD_MAKES_FAIL({
                payload: err
              });
              return  EMPTY })
          )
        )
      )
    )
  );


  loadTrims$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LOAD_TRIMS),
      mergeMap((action) =>
        this.httpService.getTrims().pipe(
          map(
            (trimsRes: any) =>
              LOAD_TRIMS_SUCCESS({
                trims: trimsRes.trim
              }),
            catchError((err, caught) => {
              LOAD_TRIMS_FAIL({
                payload: err
              });
              return  EMPTY })
          )
        )
      )
    )
  );


  loadTyres$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LOAD_TYRES),
      mergeMap((action) =>
        this.httpService.getTyes().pipe(
          map(
            (tyresRes: any) =>
              LOAD_TYRES_SUCCESS({
                tyres: tyresRes.tyre
              }),
            catchError((err, caught) => {
              LOAD_MAKES_FAIL({
                payload: err
              });
              return  EMPTY })
          )
        )
      )
    )
  );

}
