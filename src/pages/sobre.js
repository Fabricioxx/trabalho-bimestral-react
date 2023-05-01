import React from "react";
import Title from "../components/Title";

function Sobre() {
  return (
    <div>
      <Title title="Sobre a Empresa" />

      <div className="container d-flex justify-content-center align-items-center">
        <div class="row g-3">
          <div class="col">
            <p>
              A nossa empresa de streaming de filmes foi fundada com o objetivo
              de oferecer aos nossos clientes uma ampla variedade de conteúdo
              audiovisual de alta qualidade. Desde então, temos trabalhado
              incansavelmente para inovar e melhorar a nossa plataforma,
              oferecendo sempre o melhor para atender às necessidades dos nossos
              clientes.
            </p>
            <p>
              Além disso, temos um forte compromisso com a sustentabilidade e o
              meio ambiente, e estamos constantemente buscando maneiras de
              reduzir o impacto das nossas operações no planeta.{" "}
            </p>
          </div>
          <div class="col">
            <img
              src={"/assets/images/logo.png"}
              alt="Logo da Empresa"
              className="float-left img-thumbnail mr-3"
              style={{ maxWidth: "350px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sobre;
