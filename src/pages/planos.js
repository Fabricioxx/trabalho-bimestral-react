import React, { useState } from "react";
import Title from "../components/Title";
import Button from "../components/Button";

const planos = [
  {
    nome: "Free",
    preco: 0.0,
    foto: "planos.jpg",
    detalhes:
      "Acesso ilimitado a filmes e séries em qualidade SD, com anúncios, e possibilidade de baixar conteúdo para assistir offline.",
  },
  {
    nome: "Plus",
    preco: 29.9,
    foto: "planos.jpg",
    detalhes:
      "Acesso ilimitado a filmes e séries em qualidade HD, sem anúncios, possibilidade de baixar conteúdo para assistir offline, e conteúdo exclusivo e lançamentos antecipados.",
  },
];

function Planos() {
  const [isFormChanged, setIsFormChanged] = useState(false);

  const handleSubmit = (event) => {
    // event.preventDefault(); - estava dando erro ao usar ao clicar no componente button

    setIsFormChanged(false);

    alert(`Plano ok`);
  };

  return (
    <div className="container text-center">
      <Title title="Planos" />
      <div class="row">
        {planos.map((plano, i) => (
          <div className="col" key={i}>
            <div className="card">
              <img
                src={"/assets/images/" + plano.foto}
                alt={plano.nome}
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">{plano.nome} </h5>
                <p className="card-text">{plano.detalhes}</p>
                <p>R$ {plano.preco.toLocaleString("pt-BR")}</p>

                <Button
                  onClick={handleSubmit}
                  isFormChanged={isFormChanged}
                  clicado={"Assinado"}
                  naoclicado={"Assinar"}
                  disabled={true}
                />
              </div>
            </div>
          </div>
        ))}

        {/* fim do map ------------------------*/}
      </div>
    </div>
  );
}

export default Planos;
