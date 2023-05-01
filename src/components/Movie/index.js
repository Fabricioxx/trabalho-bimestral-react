import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button';

function Movie(props) {
  const [listFilme, setListFilme] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [isFormChanged, setIsFormChanged] = useState(false);


  const handleSubmit = (event) => {
    // event.preventDefault(); - estava dando erro ao usar ao clicar no componente button
 
    

  };


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
    if (props.termoDeBusca) {
      const busca = listFilme.filter(filme =>
        filme.titulo.toLowerCase().includes(props.termoDeBusca.toLowerCase())
      );
      setListFilme(busca);
    }
  }, [props.termoDeBusca]);

  useEffect(() => {
    if (props.filmesOrdenados) {
      let busca = [...listFilme];

      switch (props.filmesOrdenados) {
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
  }, [props.filmesOrdenados, listFilme]);

  return (
    <div className="container text-center">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
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
                  {/*<Link to={`/play/${filme.titulo}`} className="btn btn-primary">Assistir</Link>*/}  

                 {filme.assistido ? <Button  onClick={handleSubmit} isFormChanged={true}  clicado={'Assistido'} naoclicado={'Assistir'}/> : <Button  onClick={handleSubmit} isFormChanged={false}  clicado={'Assistido'} naoclicado={'Assistir'} />}
                 

                 {/** <Button  onClick={handleSubmit} isFormChanged={isFormChanged}  clicado={'Assistido'} naoclicado={'Assistir'} /> */} 

                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Movie;




