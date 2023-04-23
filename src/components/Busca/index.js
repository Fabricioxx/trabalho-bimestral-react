import Ordenar from "../Ordenar";
import "./busca.css";
import React, { useState } from "react";

function Busca(props) {
  const [termoDeBusca, setTermoDeBusca] = useState("");

  const [Ordenacao, setOpcaoDeOrdenacao] = useState("");

  function handleFilmesOrdenados(filmesordenar) {

    setOpcaoDeOrdenacao(filmesordenar);

    props.onOpcaoDeOrdenacao(Ordenacao); // a função que receber o props onOpcaoDeOrdenacao recebe o valor da variável Ordenacao

  }


  // função para capturar o valor digitado no input e armazenar na variável setTermoDeBusca
  const handleChange = (event) => {
    setTermoDeBusca(event.target.value);

  };

  const handleClick = () => {
    // função para enviar o valor digitado no input para o componente pai

    props.onTermoDeBusca(termoDeBusca);
  };


  

  return (
    <div>
      {/* criar um caixa de busca com icone de luoa dentro */}
      <div class="input-group mb-4 mx-auto" style={{ width: "600px" }}>
        <input
          type="text"
          class="form-control"
          placeholder="Digite o nome do filme"
          aria-label="Digite o nome do filme"
          aria-describedby="button-addon2" // id do botão de busca
          value={termoDeBusca}
          onChange={handleChange} // função para capturar o valor digitado no input e armazenar na variável setTermoDeBusca
        />
        <div class="input-group-append">
          <button
            class="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
            onClick={handleClick} // função para enviar o valor digitado no input para o componente pai
          >
            {/* icone de lupa - <i class="fas fa-search"></i>*/}
            Buscar
          </button>
        </div>

        <div class="input-group-append">
          <Ordenar onOpcaoDeOrdenacao={handleFilmesOrdenados}/>
        </div>

      </div>
    </div>
  );
}

export default Busca;
