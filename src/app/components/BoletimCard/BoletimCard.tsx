'use client'
import { Dispatch, SetStateAction } from "react";
import Button from "../Button/Button";
import styles from "./boletimcard.module.css";
import { BoletimDados, Matricula } from "@/app/utils/types";
import { fetchDadosBoletim } from "@/app/utils/utils";

type Props = {
  data: Matricula;
  setModal: Dispatch<SetStateAction<boolean>>;
  setBoletim: Dispatch<SetStateAction<BoletimDados | undefined>>;
}

const BoletimCard = ({ data, setModal, setBoletim }: Props) => {
  const { nome, matricula } = data;
  // let partesNome = data.nome.split(" ");
  // let nome = `${partesNome[0]} ${partesNome[partesNome.length - 1]}`;

  async function gerarBoletim() {
    //Matriculas para teste
    // 2011116500200
    // 2014093650167
    // 2018092980182
    // 2019154331148
    // 2020126530518
    // 2017047630617
    // const data = await fetchDadosBoletim("2006126402611");
    const data = await fetchDadosBoletim("2017047630617");
    setModal(true);
    setBoletim(data);
  }

  return (
    <div className={styles.boletim}>
      <div className={styles.boletimGroup}>
        <span>Aluno: <b>{nome}</b></span>
        <span>Matrícula: <b>{matricula}</b></span>
      </div>
      <Button text="Consultar" p="p-10" fn={() => {
        gerarBoletim();
      }} />
    </div>
  )
}

export default BoletimCard;