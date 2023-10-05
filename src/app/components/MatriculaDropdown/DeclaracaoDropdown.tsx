import styles from "./matriculadropdown.module.css";
import Image from "next/image";
import Button from "../Button/Button";
import logoDeclara from "@/../public/images/logodeclara.png";
import { Matricula, DeclaracaoDados, DeclaracaoDadosConclusao } from "@/app/utils/types";
import { useReactToPrint } from "react-to-print";
import { useRef, useState } from "react";
import { obterDadosDeclaracao, obterDadosDeclaracaoConclusao } from "@/app/api/declaracao";
import Spinner from "../Spinner/Spinner";

export type RadioProps = "curso" | "conclusao";

type Props = {
  token: string;
  data: Matricula;
  i: number;
  selected: RadioProps;
  dropdownVisible: boolean;
  toggle: (index: number) => void;
}

const DeclaracaoDropdown = ({ token, i, data, selected, dropdownVisible, toggle }: Props) => {
  const [declaracaoData, setDeclaracaoData] = useState<DeclaracaoDados | DeclaracaoDadosConclusao>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const componentRef = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const gerarDeclaracoes = async (type: RadioProps) => {
    setIsLoading(true);
    if (type == "curso") {
      console.log("Chamando declaracao CURSO");
      const declaracaoDados = await obterDadosDeclaracao(data.matricula);
      console.log(declaracaoDados.frequencia)
      setDeclaracaoData(declaracaoDados);
      setIsLoading(false);
    } else if (type == "conclusao") {
      console.log("Chamando declaracao CONCLUSÃO");
      const declaracaoDados = await obterDadosDeclaracaoConclusao(data.matricula);
      setDeclaracaoData(declaracaoDados);
      setIsLoading(false);
    }
  }

  return (
    < div className={styles.matricula} >
      <div className={dropdownVisible === true ? styles.matriculaDropdownVisible : styles.matriculaDropdown} onClick={() => {
        toggle(i);
        dropdownVisible == true ? "" : gerarDeclaracoes(selected);
      }}>
        <div className={styles.matriculaGroup}>
          <span>Aluno: <b>{data.nome}</b></span>
          <span>Matrícula: <b>{data.matricula}</b></span>
        </div>
        <button
          className={`${styles.iconButton} ${dropdownVisible ? styles.open : ""}`}
        >
          <div className={styles.menuIcon}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>
      <div className={`${styles.declaracaoContainer} ${dropdownVisible ? styles.declaracaoContainerVisible : ""}`}>
        {isLoading ?
          <Spinner />
          :
          <>

            <div ref={componentRef} className={`${styles.declaracao} ${dropdownVisible ? styles.declaracaoVisible : ""}`}>
              <div className={styles.declaracaoLogo}>
                <Image src={logoDeclara} alt="Logo da Prefeitura" />
                <span className={styles.nameGroup}>
                  <h6 className={styles.title6}>Prefeitura Da Cidade do Rio de Janeiro</h6>
                  <p className={styles.text6}>Secretaria Municipal de Educação</p>
                </span>
              </div>
              <table className={styles.table}>
                <thead className={styles.tHead}>
                  <tr className={styles.tHeadRow}>
                    <th colSpan={3} className={styles.tHeadCell}>Declaração de Escolaridade</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className={styles.tRow}>
                    <th className={styles.tCell}>
                      Designação<br />
                      <p className={styles.tCellText}>E / CRE({`${declaracaoData?.uad_codigo.substring(0, 2)}.${declaracaoData?.uad_codigo.substring(2, 4)}.${declaracaoData?.uad_codigo.substring(4)}`})</p>
                    </th>
                    <th className={styles.tCell}>
                      Censo<br />
                      <p className={styles.tCellText}>{declaracaoData?.cod_censo}</p>
                    </th>
                    <th className={styles.tCell}>
                      Denominação<br />
                      <p className={styles.tCellText}>{declaracaoData?.esc_nome}</p>
                    </th>
                  </tr>
                  <tr className={styles.tRow}>
                    <th colSpan={2} className={styles.tCell}>
                      Endereço<br />
                      <p className={styles.tCellText}>{declaracaoData?.endereco_escola}</p>
                    </th>
                    <th className={styles.tCell}>
                      Telefone<br />
                      <p className={styles.tCellText}>{declaracaoData?.telefone_escola}</p>
                    </th>
                  </tr>
                </tbody>
              </table>
              <div className={styles.declaracaoText}>
                {selected === "curso" ?
                  <p>Declaro que o(a) aluno(a) {declaracaoData?.pes_nome}, código {declaracaoData?.alc_matricula},
                    NIS 16330094080, filho(a) de {declaracaoData?.nomePai} e de {declaracaoData?.nomeMae}
                    , nascido(a) em {declaracaoData?.pes_dataNascimento}, está matriculado(a) neste Estabelecimento,
                    no(a) {declaracaoData?.serie} do(a) {declaracaoData?.nivel_ensino}, no turno {declaracaoData?.turno}, obtendo frequência
                    de {declaracaoData?.frequencia} % até a presente data.</p>
                  :
                  <p>Declaro que o(a) aluno(a) {declaracaoData?.pes_nome}, código {declaracaoData?.alc_matricula},
                    NIS 16330094080, filho(a) de {declaracaoData?.nomePai} e de {declaracaoData?.nomeMae}
                    , nascido(a) em {declaracaoData?.pes_dataNascimento}, cursou neste Estabelecimento, o SERIE do(a)
                    Ensino Fundamental, no turno Manhã, no ano letivo de 2022, obteve
                    98,44% de frequência, tendo sido aprovado nos termos da Deliberação CME Nº
                    42/2020 que autorizou a implementação da Reorganização Curricular e do
                    Continum Curricular disposto na Deliberação CME Nº 43/2020, com base no
                    Parecer CNE/CP Nº 11/2020, e da Lei Nº 14.040/2020, medidas essas
                    implementadas, em caráter excepcional, durante o estado de calamidade
                    pública reconhecido pelo Decreto Legislativo nº 6, de 20 de março de 2020.
                    O aluno deverá cursar o 9º ano no próximo período letivo.</p>}
              </div>
              <div className={styles.declaracaoSignature}>
                <p className={styles.text6}>Rio de Janeiro, 23/01/2023</p>
                <div className={styles.signature}>
                  <span className={styles.signatureLine}></span>
                  <p className={styles.text6}>Diretor(a)</p>
                </div>
              </div>
              <div className={styles.declaracaoText2}>
                <p>Sr. Responsável<br />
                  Caso seja beneficiário do Programa Bolsa Família, é fundamental que procure o Centro de Referência de
                  Assistência Social mais próxima de sua residência, sempre que houver mudança de endereço, escola,
                  renda ou ocorrer nascimento ou óbito de pessoas de seu domicílio para que seu cadastro seja
                  atualizado.</p>
              </div>
              <div className={styles.declaracaoText3}>
                <p>O aluno está cadastrado no(s) seguinte(s) Programa(s):<br />
                  Bolsa Família / Benefício Variável Jovem, Cartão Carioca</p>
              </div>
              <div className={styles.declaracaoValidate}>
                <h3 className={styles.validadeTitle}>Documento com validade de 30 dias a partir da data de emissão</h3>
                <p>Valide sua declaração em: http://prefeitura.rio/sme<br />
                  Informe na consulta o código desta impressão:<br />
                  920ad26d8a</p>
              </div>
            </div>
            <Button text="Imprimir" fn={handlePrint} />
          </>
        }
      </div>
    </div>
  )
}

export default DeclaracaoDropdown;