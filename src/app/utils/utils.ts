import { setMinhasMatriculas } from "@/redux/features/matriculas-slice";
import { AppDispatch, store } from "@/redux/store";
import { getMinhasMatriculas } from "../api/matriculas";
import { useDispatch } from "react-redux";

async function fetchMatriculas() {
    try {
        const data = await getMinhasMatriculas();
        console.log("fetchMatriculas");
        store.dispatch(setMinhasMatriculas(data));
    } catch (error) {
        console.error("Erro buscando suas matrículas", error);
    }
}


export {fetchMatriculas};