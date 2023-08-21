import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export type InputMatricula = {
  nascimento: string;
  matricula: string;
}

export type Matricula = {
  id: number;
  nome: string;
  nascimento: string;
  matricula: string;
  mae: string;
  pai: string;
  escola: string;
  serie: string;
  turma: number;
}

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
    addMatricula: (state, action: PayloadAction<Matricula>) => {
      state.matriculas.push(action.payload);
    },
    removeMatricula: (state, action: PayloadAction<string>) => {
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