const obterDadosBoletim = async (matricula: number) => {
  const req = await fetch(
    `http://10.5.224.58:8080/obterDadosBoletim/${matricula}`
  );
  const data = await req.json();
  return data;
};

const obterBoletim = async (matricula: number) => {
  const req = await fetch(`http://10.5.224.58:8080/obterBoletim/${matricula}`);
  const data = await req.json();
  return data;
};

export { obterDadosBoletim, obterBoletim };
