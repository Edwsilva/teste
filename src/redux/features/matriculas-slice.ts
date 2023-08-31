import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Matricula} from "@/app/utils/types";

type InitialState = {
  matriculas: Matricula[];
  fetched: boolean;
}

const initialState:InitialState = {
  matriculas: [],
  fetched: false
}

export const matriculas = createSlice({
  name: "matriculas",
  initialState,
  reducers: {
    removeMatricula: (state, action: PayloadAction<number>) => {
      state.matriculas = state.matriculas.filter(matricula => matricula.matricula !== action.payload);
    },
    setMinhasMatriculas: (state, action: PayloadAction<Matricula[]>) => {
      state.matriculas = action.payload;
    },
    setMatriculasFetched: (state, action: PayloadAction<boolean>) => {
      state.fetched = action.payload;
    }
  },
});

export const matriculasActions = matriculas.actions;
export default matriculas.reducer;