import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';
import { state } from './reducers';
import sagas from './sagas';
import People from './People/reducers';
import Planets from './Planets/reducers';
import Ships from './Ships/reducers';

const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer: {
    state: state,
    people: People,
    planets: Planets,
    ships: Ships
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck:false}).concat(sagaMiddleware),
});

sagaMiddleware.run(sagas);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
