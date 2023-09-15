import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import matriculasReducer from "./features/matriculas-slice";
import authReducer from './features/auth-slice';
import { TypedUseSelectorHook, useSelector } from 'react-redux';

const persistConfig = {
  key: 'minhasMatriculas',
  storage,
  stateReconciler: autoMergeLevel2,

};

const rootReducer = combineReducers({
  matriculas: matriculasReducer,
  authUser: authReducer,
});

//const persistedReducer = persistReducer(persistConfig, rootReducer);
const persistedReducer = persistReducer<ReturnType<typeof rootReducer>>(persistConfig, rootReducer);

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

