import {
  InputMatricula,
  Matricula,
} from "@/app/utils/types";

const getMinhasMatriculas = async (token: string): Promise<Matricula[]> => {
  const req = await fetch(`http://10.5.224.58:8080/obterAlunos/${token}`);
  const data = await req.json();
  return data;
};

const postMatricula = async (
  {token,
  matricula,
  nascimento} : InputMatricula
) => {

  const postRequest = await fetch(
    `http://10.5.224.58:8080/adicionarAluno/${token}/matricula/${matricula}/dataNascimento/${nascimento}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );

  if (postRequest.ok) {
    return { success: true, msg: 'Matrícula adicionada.' };
  } else {
    return { success: false, msg: 'Erro ao adicionar matrícula.' };
  }
};

const deleteMatricula = async (token: string, matricula: string) => {
  const deleteRequest = await fetch(
    `http://10.5.224.58:8080/removerAluno/${token}/matricula/${matricula}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (deleteRequest.ok) {
    return { success: true, msg: "Matrícula removida com sucesso." };
  } else {
    return { success: false, msg: "Erro ao remover matrícula." };
  }
};

export {
  getMinhasMatriculas,
  postMatricula,
  deleteMatricula,
};
