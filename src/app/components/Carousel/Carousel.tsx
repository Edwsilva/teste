"use client";
import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./carousel.module.css";
import "./carousel.css";

const CarouselExample = () => {
  return (
    <Carousel controls={false}>
      <Carousel.Item>
        <h4 className={styles.depoimento}>
          "Sou um depoimento. Clique aqui para editar seu próprio texto. Você
          também pode alterar a fonte e mais. Use este espaço para compartilhar
          algo bom sobre você e seus serviços."
        </h4>
        <h5 className={styles.nome}>Jair, pai do Messias</h5>
      </Carousel.Item>
      <Carousel.Item>
        <h4 className={styles.depoimento}>
          "Sou um depoimento. Clique aqui para editar seu próprio texto. Você
          também pode alterar a fonte e mais. Use este espaço para compartilhar
          algo bom sobre você e seus serviços."
        </h4>
        <h5 className={styles.nome}>Jair, pai do Messias</h5>
      </Carousel.Item>
      <Carousel.Item>
        <h4 className={styles.depoimento}>
          "Sou um depoimento. Clique aqui para editar seu próprio texto. Você
          também pode alterar a fonte e mais. Use este espaço para compartilhar
          algo bom sobre você e seus serviços."
        </h4>
        <h5 className={styles.nome}>Jair, pai do Messias</h5>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselExample;
