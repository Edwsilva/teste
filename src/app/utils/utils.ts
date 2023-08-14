import { matriculasActions } from "@/redux/features/matriculas-slice";
import { store } from "@/redux/store";
import { getMinhasMatriculas } from "../api/matriculas";
import {toast} from "react-toastify";

type ToastifyProps = {
    msg: string;
    type: "info" | "success" | "warning" | "error" | "default";
};

async function fetchMatriculas() {
    try {
        const data = await getMinhasMatriculas();
        console.log("fetchMatriculas");
        store.dispatch(matriculasActions.setMinhasMatriculas(data));
    } catch (error) {
        console.error("Erro buscando suas matrículas", error);
    }
}

function launchToast({ msg, type }: ToastifyProps) {
    toast(msg, {
        type: type,
        autoClose: 3000,
        pauseOnHover: false,
        draggable: false,
    })
}


export {fetchMatriculas, launchToast};