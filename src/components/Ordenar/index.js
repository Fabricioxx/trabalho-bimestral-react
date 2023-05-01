import React, { useState } from "react";
import "./ordenar.css";

function Ordenar(props) {
  const [opcaoDeOrdenacao, setOpcaoDeOrdenacao] = useState('');

  const handleOrdenacaoChange = (event) => {
    setOpcaoDeOrdenacao(event.target.value);
    
    if (event.target.value !== '') {
      props.onOpcaoDeOrdenacao(event.target.value);
    }
  }  
      

  return (
    <div className="ordenar">
      <select
        className="form-select"
        aria-label="Default select example"
        value={opcaoDeOrdenacao}
        onChange={handleOrdenacaoChange}
      >
        <option value="">Ordenar</option>
        <option value="1">Titulo</option>
        <option value="2">Ano</option>
        <option value="3">Nota</option>
      </select>
    </div>
  );
}

export default Ordenar;

