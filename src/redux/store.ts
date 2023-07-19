import {configureStore, combineReducers} from "@reduxjs/toolkit";
import {persistStore, persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";
import matriculasReducer from "./features/matriculas-slice";
import { TypedUseSelectorHook ,useSelector} from "react-redux";

const persistConfig = {
  key: 'root',
  storage,
}

const reducer = combineReducers({
  matriculas: matriculasReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

// export const persistor = persistStore(store);

export const store = configureStore({
  reducer: {
    persistedReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;