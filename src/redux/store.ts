import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import matriculasReducer from "./features/matriculas-slice";
import authReducer from './features/auth-slice';
import { TypedUseSelectorHook, useSelector } from 'react-redux';

const persistConfig = {
  key: 'minhasMatriculas',
  storage,
};

const reducer = combineReducers({
  matriculas: matriculasReducer,
  authUser: authReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store, null, () => {
  console.log("Redux state rehydration completed!");
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

