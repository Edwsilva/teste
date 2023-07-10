import Banner from "@/app/components/Banner/Banner";
import styles from "./boletins.module.css";

const Boletins = () => {
  return (
    <div className={styles.main}>
      <Banner type="overlaySM" banner="bannerBoletins">
        <h1>Boletins e Frequência</h1>
      </Banner>
      <div className={styles.container}>
        <div className={styles.section}>
          <h2 className={styles.title}>Na Escola</h2>
          <p className={styles.text}>Cadastre a matrícula de seu filho
            (estudante da rede municipal) na página "Matrículas" para
            conferir o seu boletim e histórico escolar. Acesse também
            informações sobre as escolas da rede municipal mais
            próximas a você.</p>
        </div>
        <div className={styles.section}>
          <h2 className={styles.title}>Top 10 do Índice de Desenvolvimento
            das Escolas do Município do Rio de Janeiro</h2>
          <table>
            <thead>
              <tr>
                <th rowSpan={2}>Escolas da Região</th>
                <th>IDEB</th>
              </tr>
              <tr>
                <th>Nota Obtida</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Benjamin Hawkins</th>
                <th>9.8</th>
              </tr>
              <tr>
                <th>Olivia Anderson</th>
                <th>9.6</th>
              </tr>
              <tr>
                <th>Ethan Matthews</th>
                <th>9.4</th>
              </tr>
              <tr>
                <th>Ava Carter</th>
                <th>9.2</th>
              </tr>
              <tr>
                <th>Mason Thompson</th>
                <th>9.0</th>
              </tr>
              <tr>
                <th>Sophia Richardson</th>
                <th>8.8</th>
              </tr>
              <tr>
                <th>Jackson Reed</th>
                <th>8.6</th>
              </tr>
              <tr>
                <th>Isabella Murphy</th>
                <th>8.4</th>
              </tr>
              <tr>
                <th>Lucas Mitchell</th>
                <th>8.2</th>
              </tr>
              <tr>
                <th>Harper Evans</th>
                <th>8.0</th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

  )
}

export default Boletins;
