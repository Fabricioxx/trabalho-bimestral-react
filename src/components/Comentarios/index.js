import React from "react";
import "./comentarios.css";

// metodo que recebe uma lista de comentarios atraves de props e retorna uma lista de comentarios formatados com html e bootstrap
function Comentarios({ comentarios }) {
  


  if(comentarios === null){

    return(
        <div className="container text-center">
            <div class="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Nenhum comentário encontrado! </h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

    }


  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Comentários</h5>

           <div className="comentarios-scroll"> {/**scroll para os comentarios */}
              {comentarios.map((comentario, i) => (
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{comentario.nome}</h5>
                    <p className="card-text">{comentario.comentario}</p>
                  </div>
                </div>
              ))}
           </div>
           
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Comentarios;
