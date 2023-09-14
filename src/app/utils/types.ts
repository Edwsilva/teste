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

//Auth
type UserInfo = {
  name: string;
  email: string;
  token: string;
};

type AuthInfoState = {
  authenticated: boolean;
  userInfo: UserInfo;
};

export type {Escola, TopIndice, TopIndices, TopIndicesPorAno, TopIndicesPorEscola, MinhasEscolas}
export type { UserInfo, AuthInfoState };