import { TopIndices, TopIndicesPorAno, MinhasEscolas, TopIndicesPorEscola } from "../utils/types";

const getMinhasEscolas = async (): Promise<MinhasEscolas> => {
  const req = await fetch("http://localhost:3001/minhasEscolas", {cache: 'no-cache'});
  const data = await req.json();
  return data;
}

const getTop10Escolas = async (): Promise<TopIndices> => {
  const req = await fetch("http://localhost:3001/topIndice", {cache: 'no-cache'});
  const data = await req.json();
  return data;
}

const getTop10EscolasPorAno = async (ano: string): Promise<TopIndicesPorAno> => {
  const req = await fetch(`http://localhost:3001/infoPorAno?ano=${ano}`);
  const data = await req.json();
  return data;
}

const getTop10EscolasPorEscola = async (escola: string): Promise<TopIndicesPorEscola> => {
  if(escola.indexOf(" ")){
    escola = escola.replace(" ", "%20");
  }
  const req = await fetch(`http://localhost:3001/escolas?nome=${escola}`);
  const data = await req.json();
  return data;
}

export {getTop10Escolas, getMinhasEscolas, getTop10EscolasPorAno, getTop10EscolasPorEscola};