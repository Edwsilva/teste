//Boletim
type Aluno = {
  alu_id: number;
  mtu_id: number;
  mtu_numeroChamada: number;
  alc_matricula: string;
  pes_sexo: "F" | "M";
  aluno: string;
  pes_dataNascimento: string;
  nomePai: string;
  nomeMae: string;
  serie: string;
  turma: string;
  turno: string;
  ultimaFrequenciaAcumulada: number;
  mtu_resultado: any;
  resultado: any;
  escola: string;
  ano: number;
  esc_id: number;
};

type DadoBoletim = {
  tds_id: number;
  alu_id: number;
  mtu_id: number;
  tur_id: number;
  tur_codigo: number;
  tud_global: boolean;
  tud_disciplinaEspecial: boolean;
  ava_tipo: number;
  fav_tipo: number;
  ava_exibeSemProfessor: boolean;
  ava_exibeNaoAvaliados: boolean;
  naoAvaliado: boolean;
  semProfessor: boolean;
  tpc_id: number;
  tpc_nome: string;
  ava_mostraConceito: boolean;
  ava_mostraNota: boolean;
  numeroAulas: number;
  numeroFaltas: number;
  avaliacao: any;
  avaliacaoOriginal: any;
  avaliacaoAdicional: any;
  frequenciaAcumulada: number;
  fav_variacao: number;
  mostraConceito: boolean;
  mostraNota: boolean;
  mostraFrequencia: boolean;
  naoLancarNota: boolean;
  naoExibirNota: boolean;
  naoExibirFrequencia: boolean;
  ava_nomeRec: string;
  notaDisciplinaConceito: boolean;
  esc_id: number;
  esc_codigo: string;
  esc_nome: string;
  tud_tipo: number;
  esa_tipo: number;
  nomeDisciplina: string;
  enriquecimentoCurricular: boolean;
  parecerConclusivo: any;
  frequenciaFinalAjustada: number;
  notaAdicionalNumerica: boolean;
  disciplinaEspecial: string;
  notaNumericaRecuperacao: number;
  mostrarLinhaDisciplina: boolean;
  notaNumericaResult: boolean;
  notaSomar: number;
  notaNumerica: boolean;
  notaRP: string;
  disciplina: string;
  notaID: number;
  recuperacao: boolean;
  notaTotal: number;
  notaResultado: string;
  notaRecEsp: string;
  parecerFinal: any;
};

type Avaliacao = {
  tpc_nome: string;
  nomeDisciplina: string;
  fav_id: number;
  tur_id: number;
  mtu_id: number;
  alu_id: number;
  tds_id: number;
  avs_id: number;
  avs_nome: string;
  tpc_id: number;
  tpc_ordem: number;
  tds_ordem: number | string;
  nota: string;
  notaID: number;
};

type BoletimDados = {
  aluno: Aluno;
  educacaoInfantil: boolean;
  dadosBoletim: DadoBoletim[];
  avaliacoes: Avaliacao[];
};


//Declaração
type DeclaracaoDados = {
  alc_matricula: string;
  mtu_numeroChamada: string;
  pes_nome: string;
  pes_dataNascimento: string;
  nomePai: string;
  nomeMae: string;
  serie: string;
  turma: string;
  turno: string;
  esc_id: string;
  uni_id: string;
  mtu_resultado: string | null;
  esc_nome: string;
  uad_codigo: string;
  cal_ano: string;
  cur_nome: string;
  nomeTurno: string;
  proxCurriculo: string;
  dataMovimentacao: string;
  nivel_ensino: string;
  cod_censo: string;
  telefone_escola: string;
  endereco_escola: string;
  hash: string;
  id: number;
  frequencia: string;
  conceito: string;
  avaliacoesAluno: string | null;
  cursoPeja: string;
  nisAluno: string;
  participaBolsaFamilia: string;
  programasSociais: string;
}

type DeclaracaoDadosConclusao = {
  alc_matricula: string;
  mtu_numeroChamada: string;
  pes_nome: string;
  pes_dataNascimento: string;
  nomePai: string;
  nomeMae: string;
  serie: string;
  turma: string;
  turno: string;
  esc_id: string;
  uni_id: string;
  mtu_resultado: string | null;
  esc_nome: string;
  uad_codigo: string;
  cal_ano: string;
  cur_nome: string;
  nomeTurno: string;
  proxCurriculo: string;
  dataMovimentacao: string;
  nivel_ensino: string;
  cod_censo: string;
  telefone_escola: string;
  endereco_escola: string;
  hash: string;
  id: number;
  participaBolsaFamilia: string;
  programasSociais: string;
  nisAluno: string;
  cursoPeja: string;
  frequencia: string;
  conceito: string;
  avaliacoesAluno: string | null;
}


//Matriculas
type InputMatricula = {
  nascimento: string;
  matricula: string;
  token: string;
};

type Matricula = {
  id: number;
  matricula: string;
  nome: string;
  designacao: number;
  cpfResponsavel: string;
  dataInclusao: string;
};

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
];

type TopIndicesPorEscola = [
  {
    nome: string;
    info: TopIndice[];
  }
];

type MinhaEscola = {
  id: number;
  nome: string;
};

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

export type { BoletimDados, DadoBoletim, Avaliacao };

export type { Matricula, InputMatricula };

export type {DeclaracaoDados, DeclaracaoDadosConclusao}

export type {
  Escola,
  TopIndice,
  TopIndices,
  TopIndicesPorAno,
  TopIndicesPorEscola,
  MinhasEscolas,
};

export type { UserInfo, AuthInfoState };
