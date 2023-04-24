import React, { useState } from "react";
import "./ordenar.css";

function Ordenar(props) {
  const [opcaoDeOrdenacao, setOpcaoDeOrdenacao] = useState('');


const handleOrdenacaoChange = (event) => {

    // ordenação dos filmes de acordo com a opção selecionada
    setOpcaoDeOrdenacao(event.target.value);

    props.onOpcaoDeOrdenacao(opcaoDeOrdenacao);
    
}  
      

  return (
    <div className="ordenar">
      <select
        class="form-select"
        aria-label="Default select example"
        value={opcaoDeOrdenacao}
        onChange={handleOrdenacaoChange}
      >
        <option selected>Ordenar</option>
        <option value="1">Titulo</option>
        <option value="2">Ano</option>
        <option value="3">Nota</option>
      </select>
    </div>
  );
}

export default Ordenar;
