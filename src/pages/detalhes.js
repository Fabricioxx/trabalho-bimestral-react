import { useParams } from "react-router-dom";
import Comentarios from "../components/Comentarios";
import React, { useState, useEffect } from 'react';


const comentarios = [ {
  nome: "Pedro",
  comentario: "Gráficos incríveis e uma história envolvente!"
},
{
  nome: "Ana",
  comentario: "Não gostei muito do enredo, mas os efeitos especiais são impressionantes."
}

]




function Detalhes() {
  const { id } = useParams();

  const [filme, setFilme] = useState(null);
  const [erro, setErro] = useState(false);

  useEffect(() => {
    fetch(`https://my-json-server.typicode.com/marycamila184/moviedetails/moviedetails/${id}`)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Não foi possível obter o filme.");
        }
      })
      .then(data => setFilme(data))
      .catch(err => {
        console.error(err);
        setErro(true);
      })
  }, [id]);

  if (erro) {
    return <div>Não foi possível obter o filme rrrr.</div>;
  }

  if (!filme) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="container">
      <div class="row">
        <div class="col-sm-6">
          <div className="card1">
            <img
              src={filme.poster} alt={filme.titulo}
              
              className="img-fluid w-50"
            />
          </div>
        </div>
        <div class="col-sm-6">
          <div className="card2">
            <div className="card-body">
              <h5 className="card-title">{filme.titulo}</h5>
              <p>Ano: {filme.ano}</p> 
              <p>Sinopse: {filme.sinopse}</p>

              {/** <p>Duração: {filme.duracao}</p>
              <p>Gênero: {filme.genero}</p>
              <p>Ano: {filme.ano}</p>
              <p>Sinopse: {filme.sinopse}</p>
              <p>Nota: {filme.nota}</p> */}
              

              <a href={`/`}>
                <div className="btn btn-primary">Assistir</div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <hr></hr>
      <Comentarios comentarios={comentarios} />
    </div>
  );
}

export default Detalhes;
