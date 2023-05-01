import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../Button";
import Busca from "../Busca";

function Movie() {
  const [listFilme, setListFilme] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [termoDeBusca, setTermoDeBusca] = useState(""); //criar uma variável para armazenar o valor digitado no input
  const [filmesOrdenados, setFilmesOrdenados] = useState(""); //criar uma variável para armazenar o valor digitado no input

  function handleTermoDeBusca(termo) {
    setTermoDeBusca(termo);
  }

  function handleFilmesOrdenados(filmesordenar) {
    setFilmesOrdenados(filmesordenar); // recebe o valor da variável props
  }

  const handleSubmit = (event) => {
    // event.preventDefault(); - estava dando erro ao usar ao clicar no componente button
    alert(`PLAY Filme`);
  };

  useEffect(() => {
    setIsLoading(true);
    fetch("https://my-json-server.typicode.com/marycamila184/movies/movies")
      .then((response) => response.json())
      .then((data) => {
        setListFilme(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
      });
  },[]);

  

  
  const filteredFilmes = listFilme.filter(filme => {
    return filme.titulo.toLowerCase().includes(termoDeBusca.toLowerCase());
  });

  

  useEffect(() => {
    if (filmesOrdenados) {
      let busca = [...filteredFilmes];

      switch (filmesOrdenados) {
        case "1":
          busca.sort((a, b) => a.titulo.localeCompare(b.titulo));
          break;
        case "2":
          busca.sort((a, b) => a.ano - b.ano);
          break;
        case "3":
          busca.sort((a, b) => b.nota - a.nota);
          break;
        default:
          break;
      }

      setListFilme(busca);
    }
  }, [filmesOrdenados, filteredFilmes]);

  return (
    <>
      <Busca
        termoDeBusca={termoDeBusca}
        onTermoDeBusca={handleTermoDeBusca}
        onOpcaoDeOrdenacao={handleFilmesOrdenados}
      />

      <div className="container text-center">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <div className="row">
            {filteredFilmes.map((filme, i) => (
              <div className="col-3 pt-0" key={i}>
                <div className="card">
                  <img
                    src={filme.poster}
                    alt={filme.titulo}
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h6 className="card-title">
                      {filme.titulo} - ({filme.ano})
                    </h6>
                    <p>Nota: {filme.nota}</p>
                    <div className="d-grid gap-2 col-6 mx-auto">
                      <Link to={`/detalhes/${filme.id}`}>Detalhes</Link>
                      {/*<Link to={`/play/${filme.titulo}`} className="btn btn-primary">Assistir</Link>*/}

                      {filme.assistido ? (
                        <Button
                          onClick={handleSubmit}
                          isFormChanged={true}
                          clicado={"Assistir Novamente"}
                          naoclicado={"Assistir"}
                        />
                      ) : (
                        <Button
                          onClick={handleSubmit}
                          isFormChanged={false}
                          clicado={"Assistido"}
                          naoclicado={"Assistir"}
                        />
                      )}

                      {/** <Button  onClick={handleSubmit} isFormChanged={isFormChanged}  clicado={'Assistido'} naoclicado={'Assistir'} /> */}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Movie;
