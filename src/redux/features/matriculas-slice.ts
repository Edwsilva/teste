import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type Matricula = {
  id: number;
  nome: string;
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
    removeMatricula: (state, action: PayloadAction<Matricula>) => {
      state.matriculas = state.matriculas.filter(matricula => matricula.matricula !== action.payload.matricula);
    }
  }
});

export const {addMatricula, removeMatricula} = matriculas.actions;
export default matriculas.reducer;