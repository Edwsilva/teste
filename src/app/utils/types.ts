//Matriculas
type InputMatricula = {
  nascimento: string;
  matricula: string;
}

// type Matricula = {
//   id: number;
//   nome: string;
//   nascimento: string;
//   matricula: string;
//   mae: string;
//   pai: string;
//   escola: string;
//   serie: string;
//   turma: number;
// }

type Matricula = {
  id: number;
  matricula: number;
  nome: string;
  designacao: number;
  cpfResponsavel: string;
  dataInclusao: string;
}


//Top10 e Escola
type Escola = {
  ano?: number;
  nome?: string;
  nota: number;
};

type TopIndice = {
  serie?: "4ª a 6ª Série" | "7ª a 9ª Série";
  nome?: string;
  top: Escola[];
};

type TopIndices = TopIndice[];

//Pesquisa no json-server retorna um array por conta dos query params
type TopIndicesPorAno = [
  {
    ano: number;
    info: TopIndice[];
  }
]

type TopIndicesPorEscola = [
  {
    nome: string;
    info: TopIndice[];
  }
]

type MinhaEscola = {
  id: number;
  nome: string;
}

type MinhasEscolas = MinhaEscola[];

export type {
  Escola,
  TopIndice,
  TopIndices,
  TopIndicesPorAno,
  TopIndicesPorEscola,
  MinhasEscolas,
  //Matriculas
  Matricula,
  // Matricula2,
  InputMatricula
}