import { matriculasActions } from "@/redux/features/matriculas-slice";
import { store } from "@/redux/store";
import { getMinhasMatriculas } from "../api/matriculas";

async function fetchMatriculas() {
    try {
        const data = await getMinhasMatriculas();
        console.log("fetchMatriculas");
        store.dispatch(matriculasActions.setMinhasMatriculas(data));
    } catch (error) {
        console.error("Erro buscando suas matrículas", error);
    }
}


export {fetchMatriculas};