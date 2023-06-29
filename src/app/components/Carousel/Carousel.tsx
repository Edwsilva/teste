"use client";
import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./carousel.module.css";

const CarouselExample = () => {
  return (
    <Carousel style={{ width: "75%", margin: "0 auto 30px auto" }}>
      <Carousel.Item>
        {/* <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/218480/pexels-photo-218480.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="First slide"
          style={{height: 400}}
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
        <h4 className={styles.depoimento}>
          "Sou um depoimento. Clique aqui para editar seu próprio texto. Você
          também pode alterar a fonte e mais. Use este espaço para compartilhar
          algo bom sobre você e seus serviços."
        </h4>
        <h5 className={styles.nome}>Jair, pai do Messias</h5>
      </Carousel.Item>
      <Carousel.Item>
        {/* <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/218480/pexels-photo-218480.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="First slide"
          style={{height: 400}}
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
        <h4 className={styles.depoimento}>
          "Sou um depoimento. Clique aqui para editar seu próprio texto. Você
          também pode alterar a fonte e mais. Use este espaço para compartilhar
          algo bom sobre você e seus serviços."
        </h4>
        <h5 className={styles.nome}>Jair, pai do Messias</h5>
      </Carousel.Item>
      <Carousel.Item>
        {/* <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/218480/pexels-photo-218480.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="First slide"
          style={{height: 400}}
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
        <h4 className={styles.depoimento}>
          "Sou um depoimento. Clique aqui para editar seu próprio texto. Você
          também pode alterar a fonte e mais. Use este espaço para compartilhar
          algo bom sobre você e seus serviços."
        </h4>
        <h5 className={styles.nome}>Jair, pai do Messias</h5>
      </Carousel.Item>
      {/* <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/705778/pexels-photo-705778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Second slide"
          style={{ height: 400 }}
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/1173794/pexels-photo-1173794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Third slide"
          style={{ height: 400 }}
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item> */}
    </Carousel>
  );
};

export default CarouselExample;
