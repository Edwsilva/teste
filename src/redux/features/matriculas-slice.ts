import {createSlice, PayloadAction, createAsyncThunk} from "@reduxjs/toolkit";

export type InputMatricula = {
  id?: number;
  nome: string;
  nascimento: string;
  matricula: string;
}

type Matricula = {
  nome: string;
  // nascimento: string;
  matricula: string;
}

type InitialState = {
  matriculas: Matricula[];
}

// export const fetchMinhasMatriculas = createAsyncThunk("matriculas/getAllMatriculas", async (thunkApi) => {
//   const response = await fetch("http://localhost:3001/minhasMatriculas");
//   const data = await response.json();
//   return data;
// })

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
    },
    setMinhasMatriculas: (state, action: PayloadAction<InputMatricula[]>) => {
      state.matriculas = action.payload;
    }
  },
});

export const {addMatricula, removeMatricula, setMinhasMatriculas} = matriculas.actions;
export default matriculas.reducer;