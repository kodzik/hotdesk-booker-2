import { createReducer } from '@ngrx/store';

export interface State {}

const initialState: State = {};

export const coreNavigationReducer = createReducer(initialState);
