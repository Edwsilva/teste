import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export type InputMatricula = {
  // id: number;
  // nome: string;
  nascimento: string;
  matricula: string;
}

export type Matricula = {
  id: number;
  nome: string;
  nascimento: string;
  matricula: string;
}

type InitialState = {
  matriculas: Matricula[];
}

const initialState:InitialState = {
  matriculas: [],
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
    }
  },
});

export const {addMatricula, removeMatricula, setMinhasMatriculas} = matriculas.actions;
export default matriculas.reducer;