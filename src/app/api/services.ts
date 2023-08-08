import { InputMatricula } from "@/redux/features/matriculas-slice";

const getMinhasMatriculas = async (): Promise<InputMatricula[]> => {
  const req = await fetch("http://localhost:3001/minhasMatriculas");
  const data = await req.json();
  return data;
}

const postMinhasMatriculas = async (matricula: InputMatricula) => {
  fetch("http://localhost:3001/minhasMatriculas", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(matricula)
  });
}

const apiCheckMatricula = async ({matricula, nascimento}: {matricula: string, nascimento: string}): Promise<InputMatricula> => {
    const req = await fetch(`http://localhost:3001/matriculas?matricula=${matricula}`);
    const data = await req.json();
    return data[0];
}

export {apiCheckMatricula, getMinhasMatriculas, postMinhasMatriculas}