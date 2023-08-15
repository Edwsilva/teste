import { TopIndices, MinhasEscolas } from "../utils/types";

const getTop10Escolas = async (): Promise<TopIndices> => {
  const req = await fetch("http://localhost:3001/topIndice", {next: {revalidate: 86400}});
  const data = await req.json();
  return data;
}

const getMinhasEscolas = async (): Promise<MinhasEscolas> => {
  const req = await fetch("http://localhost:3001/minhasEscolas", {cache: 'force-cache'});
  const data = await req.json();
  return data;
}

export {getTop10Escolas, getMinhasEscolas};