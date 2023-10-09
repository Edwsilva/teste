import { BoletimDados } from "../utils/types";

const obterDadosBoletim = async (token: string): Promise<BoletimDados> => {
  const req = await fetch(
    `http://10.5.224.58:8080/obterDadosBoletim/${token}`
  );
  const data = await req.json();
  return data;
};

const obterBoletim = async (token: string) => {
  const req = await fetch(`http://10.5.224.58:8080/obterBoletim/${token}`);
  const data = await req.text();
  return data;
};

export { obterDadosBoletim, obterBoletim };