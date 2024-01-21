import { createAction } from '@ngrx/store';

export const gotoMyReservations = createAction(
  '[coreNavigation] redirectToMyReservations'
);

export const pageNotFoundRedirect = createAction(
  '[coreNavigation] pageNotFoundRedirect'
);
