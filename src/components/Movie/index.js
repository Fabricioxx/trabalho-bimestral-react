import React from 'react';





function Movie(props){

  

    if (props.filmesordenados !== '') {
     
      if (props.filmesordenados === "1") {
        props.filmes.sort(function (a, b) {
          return a.nome.localeCompare(b.nome);
        });
      } else if (props.filmesordenados === "2") {
        props.filmes.sort(function (a, b) {
          return a.ano - b.ano;
        });
      } else if (props.filmesordenados === "3") {
        props.filmes.sort(function (a, b) {
          return b.nota - a.nota;
        });

      }


    }

    



    if (props.filmeBusca !== '') {

       // alert(filmeBusca);
    
        const filmesFiltrados = props.filmes.filter(filme => filme.nome.toLowerCase().includes(props.filmeBusca.toLowerCase()));
    
           if(filmesFiltrados.length === 0){
    
          return(
            <div className="container text-center">
              <div class="row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Nenhum filme encontrado! </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
    
           }
    
    
    
    
        return(
        
          <div className="container text-center">
          <div class="row">
    
            {filmesFiltrados.map((filme, i) => (
              <div className="col-4" key={i}>
                <div className="card">
                  <img src={'/assets/images/' + filme.foto} alt={filme.nome} className="card-img-top" />
                  <div className="card-body">
                    <h5 className="card-title">{filme.nome} - {filme.ano}</h5>
                    <p>{filme.nota}</p>
    
                    </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        )
            
      }


     




  return (

    <div className="container text-center">
      <div class="row">

        {props.filmes.map((filme, i) => (
          <div className="col-3 pt-0" key={i}>
            <div className="card">
              <img src={'/assets/images/' + filme.foto} alt={filme.nome} className="card-img-top " />
              <div className="card-body">
                <h6 className="card-title">{filme.nome} - ({filme.ano}) </h6>
                <p>{filme.nota}</p>

                

                <div class="d-grid gap-2 col-6 mx-auto">

                <a href={`/detalhes/${filme.nome}`} >
                  
                    Detalhes
                  
                  </a>


                  <a href={ `/`/*`/play/${filme.nome}`*/} >
                  <div className="btn btn-primary">
                    Assitir
                  </div>
                  </a>    
                  </div>      

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

  )

}

export default Movie;