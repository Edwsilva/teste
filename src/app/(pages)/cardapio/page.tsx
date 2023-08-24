'use client'
import Banner from "@/app/components/Banner/Banner";
import styles from "./cardapio.module.css";
import Button from "@/app/components/Button/Button";
import Container from "@/app/components/Container/Container";
import PDFViewer from "@/app/components/PDFViewer/PDFViewer";
import { useEffect, useState } from "react";
import Link from "next/link";

const data = "21/08/2023";
const dataFinal = "25/08/2023";

const Cardapio = () => {
  const [pdfOpen, setPdfOpen] = useState<boolean>(false);

  return (
    <div className={styles.main}>
      <Banner type="overlaySM" banner="bannerCardapio">
        <h1>Cardápio</h1>
      </Banner>
      <Container>
        <h2 className={styles.title}>Merenda/Cardápio Escolar</h2>
        <p className={styles.textI}>Atenção: Para visualizar o cardápio escolar,
          será necessário habilitar os POP-UPS na barra de endereços do seu
          navegador</p>
        <div className={styles.cardapio}>
          <h3 className={styles.title2}>Confira o cardápio</h3>
          <p className={styles.text}>Confira o cardápio da merenda escolar oferecido nas
            escolas, creches e Espaços de Desenvolvimento Infantil (EDIs).</p>
          <p className={styles.textI}>Semana de {data} a {dataFinal}</p>
          {pdfOpen ?
            <PDFViewer pdfUrl="https://educacao.prefeitura.rio/wp-content/uploads/sites/42/2023/08/ANEXO-1-comunicacao.pdf" />
            :
            ""}
          <Button text={pdfOpen ? "Fechar Cardápio" : "Cardápio das Unidades Educacionais"} fn={() => setPdfOpen(!pdfOpen)} />
        </div>
        <div className={styles.sobre}>
          <h3 className={styles.title2}>Cardápios do Programa Nacional de Alimentação Escolar</h3>
          <p className={styles.text}>A Alimentação Escolar é direito dos alunos da educação
            básica pública e dever do Estado. Neste sentido, na Cidade do Rio de Janeiro, o
            Programa Nacional de Alimentação Escolar (PNAE), destinado às escolas e creches,
            tem o objetivo de garantir às crianças matriculadas nas unidades municipais o
            acesso a uma alimentação saudável e adequada, que compreende o uso de alimentos
            variados, seguros, que respeitem a cultura e que promovam a formação de hábitos
            alimentares saudáveis.</p>
          <p className={styles.text}>O PNAE baseia-se nos princípios e diretrizes da
            Alimentação Escolar estabelecidos na Lei Nº. 11947 de 16/06/2009 e Resolução
            CD/FNDE Nº. 06 de 08/05/2020.</p>
          <p className={styles.text}>Os cardápios publicados neste Aviso, em atendimento ao Decreto 30.863 de 02
            de julho de 2009, são elaborados pela Unidade de Nutrição e Segurança
            Alimentar Annes Dias para orientação das unidades escolares da Rede Municipal
            de Ensino.</p>
          <p className={styles.text}>O plano alimentar é composto por quatro semanas de cardápios (semana A,
            semana B, semana C e semana D) de acordo com o tipo de refeição a ser fornecida.
            As refeições levam em consideração o tempo de permanência do aluno e a faixa
            etária do aluno da unidade escolar.</p>
          <p className={styles.text}>Os cardápios são os mesmos para toda a rede municipal de ensino e a sua execução
            ocorre de forma alternada, ou seja, as Coordenadorias Regionais de Educação (CRE)
            utilizam semanas diferentes, conforme anexos.</p>
          <Link href="https://educacao.prefeitura.rio/wp-content/uploads/sites/42/2023/08/Lauda-TIMBRADA-18.pdf" target="_blank">
            <Button text="Sobre o Cardápio da Alimentação Escolar" />
          </Link>
        </div>
      </Container>
    </div>
  )
}

export default Cardapio;