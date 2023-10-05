import { DeclaracaoDados, DeclaracaoDadosConclusao } from "../utils/types";

const obterDadosDeclaracao = async (token: string): Promise<DeclaracaoDados> => {
    const req = await fetch(`http://10.5.224.58:8080/obterDadosDeclaracao/${token}`);
    const data = await req.json();
    return data;
}

const obterDadosDeclaracaoConclusao = async (token: string): Promise<DeclaracaoDadosConclusao> => {
    const req = await fetch(`http://10.5.224.58:8080/obterDadosDeclaracaoConclusao/${token}`);
    const data = await req.json();
    return data;
}

export {obterDadosDeclaracao, obterDadosDeclaracaoConclusao}