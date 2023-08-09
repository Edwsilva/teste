import { InputMatricula, Matricula } from "@/redux/features/matriculas-slice";

const getMinhasMatriculas = async (): Promise<InputMatricula[]> => {
  const req = await fetch("http://localhost:3001/minhasMatriculas");
  const data = await req.json();
  return data;
}

const postMatricula = async (matricula:  Matricula) => {
    const postRequest = await fetch("http://localhost:3001/minhasMatriculas", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(matricula)
    })

    if(postRequest.ok){
      return {success: true}
    }else{
      return {success: false, status: postRequest.status}
    }
}

const deleteMatricula = async (id: number) => {
    const deleteRequest = await fetch(`http://localhost:3001/minhasMatriculas/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })

    if(deleteRequest.ok){
      return {success: true}
    }else{
      return {success: false, status: deleteRequest.status}
    }
}



const apiCheckMatricula = async ({matricula, nascimento}: InputMatricula): Promise<Matricula | undefined> => {
    const req = await fetch(`http://localhost:3001/matriculas?matricula=${matricula}`);
    const data = await req.json();
    if(nascimento === data[0].nascimento){
      return data[0];
    }
}

export {apiCheckMatricula, getMinhasMatriculas, postMatricula, deleteMatricula}