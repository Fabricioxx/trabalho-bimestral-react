import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Movie(props) {
  const [listFilme, setListFilme] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://my-json-server.typicode.com/marycamila184/movies/movies")
      .then(response => response.json())
      .then(data => {
        setListFilme(data);
        setIsLoading(false);
      })
      .catch(err => {
        console.error(err);
        setIsLoading(false);
      })
  }, []);

  useEffect(() => {
    setIsLoading(true);
    const busca = props.termoDeBusca
      ? listFilme.filter(filme =>
          filme.titulo.toLowerCase().includes(props.termoDeBusca.toLowerCase())
        )
      : listFilme;

    switch (props.filmesOrdenados) {
      case "1":
        busca.sort((a, b) => a.titulo.localeCompare(b.titulo));
        break;
      case "2":
        busca.sort((a, b) => b.titulo.localeCompare(a.titulo));
        break;
      case "3":
        busca.sort((a, b) => a.ano - b.ano);
        break;
      case "4":
        busca.sort((a, b) => b.ano - a.ano);
        break;
      case "5":
        busca.sort((a, b) => b.nota - a.nota);
        break;
      case "6":
        busca.sort((a, b) => a.nota - b.nota);
        break;
      default:
        break;
    }

    setListFilme(busca);
    setIsLoading(false);
  }, [props.termoDeBusca, props.filmesOrdenados]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container text-center">
      <div className="row">
        {listFilme.map((filme, i) => (
          <div className="col-3 pt-0" key={i}>
            <div className="card">
              <img src={filme.poster} alt={filme.titulo} className="card-img-top" />
              <div className="card-body">
                <h6 className="card-title">{filme.titulo} - ({filme.ano})</h6>
                <p>{filme.nota}</p>
                <div className="d-grid gap-2 col-6 mx-auto">
                  <Link to={`/detalhes/${filme.id}`}>Detalhes</Link>
                  <Link to={`/play/${filme.titulo}`} className="btn btn-primary">Assistir</Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Movie;



