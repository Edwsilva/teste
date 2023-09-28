import { matriculasActions } from "@/redux/features/matriculas-slice";
import { store } from "@/redux/store";
import { getMinhasMatriculas } from "../api/matriculas";
import { toast } from "react-toastify";
import { obterBoletim, obterDadosBoletim } from "../api/boletim";

type ToastifyProps = {
  msg: string;
  type: "info" | "success" | "warning" | "error" | "default";
};

async function fetchMatriculas(cpf: string) {
  const data = await getMinhasMatriculas(cpf);
  console.log("fetchMatriculas");
  store.dispatch(matriculasActions.setMinhasMatriculas(data));
}

async function fetchDadosBoletim(matricula: string) {
  const data = await obterDadosBoletim(matricula);
  console.log("obterDadosBoletim", data);
  return data;
}

async function fetchBoletim(matricula: string) {
  const data = await obterBoletim(matricula);
  console.log("obterBoletim", data);
  return data;
}

function launchToast({ msg, type }: ToastifyProps) {
  toast(msg, {
    type: type,
    autoClose: 3000,
    pauseOnHover: false,
    draggable: false,
  });
}

export { fetchMatriculas, fetchDadosBoletim, fetchBoletim, launchToast };
