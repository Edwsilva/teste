type Escola = {
  ano?: number;
  nome: string;
  nota: number;
};

type TopIndice = {
  nome: string;
  top: Escola[];
};

type TopIndices = TopIndice[];

type MinhaEscola = {
  id: number;
  nome: string;
}

type MinhasEscolas = MinhaEscola[];

export type {Escola, TopIndice, TopIndices, MinhasEscolas}