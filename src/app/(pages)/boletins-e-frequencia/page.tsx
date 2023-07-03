"use client"
import { useRouter } from "next/navigation";
import Button from "../../components/Button/Button";

const Boletins = () => {
  const router = useRouter();

  function routerPush(){
    router.push("/agende-uma-aula");
  }

  return (
    <div style={{ marginTop: "100px" }}>
      <h1>Boletins e Frequência</h1>
      <Button text="Mostrar" fn={routerPush}/>
    </div>)
};

export default Boletins;
