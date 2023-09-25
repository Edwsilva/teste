import {
  InputMatricula,
  Matricula,
} from "@/app/utils/types";

const getMinhasMatriculas = async (cpf: string): Promise<Matricula[]> => {
  // console.log("Token", token);
  // console.log("CPF", cpf);
  const req = await fetch(`http://10.5.224.58:8080/obterAlunos/${cpf}`);
  const data = await req.json();
  return data;
};

const postMatricula = async (cpf: string, matricula:string, nascimento:string) => {
  // const matriculaNum = Number(matricula);

  // const checkMatricula = await fetch(
  //   `http://localhost:3001/matriculas?matricula=${matriculaNum}`
  // );

  // const data = await checkMatricula.json();
  // if (data.length !== 0) {
    // if (nascimento !== data[0].nascimento) {
      // return { success: false, msg: "Data de nascimento incorreta." };
    // } else {
      // const formatData = {
      //   id: data[0].id,
      //   matricula: data[0].matricula,
      //   nome: data[0].nome,
      //   designacao: data[0].designacao,
      //   cpfResponsavel: data[0].cpfResponsavel,
      //   dataInclusao: new Date()
      // }
      
      const postRequest = await fetch(
        `http://10.5.224.58:8080/adicionarAluno/${cpf}/matricula/${matricula}/dataNascimento/${nascimento}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          // body: JSON.stringify(formatData),
        }
      );

      if (postRequest.ok) {
        return { success: true, msg: "Matrícula adicionada." };
      } else {
        return { success: false, msg: "Erro ao adicionar matrícula." };
      }

    // }
  // } else {
    // return { success: false, msg: "Matrícula não encontrada." };
  // }
};

const deleteMatricula = async (cpf: string, matricula: string) => {
  const deleteRequest = await fetch(
    `http://10.5.224.58:8080/removerAluno/${cpf}/matricula/${matricula}`,
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
