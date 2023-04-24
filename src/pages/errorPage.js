import React from "react";
import Title from "../components/Title";

/// 404 - Not Found page - com uma imagem de erro
function ErrorPage() {
  return (
    <div class="container">
      <div class="row">
        <div class="col-12">
          
            <Title title="Erro - 404" subtitle="Página não encontrada!"/>
          <img
            src="/assets/images/error.jpg"
            alt="404 - Not Found"
            class="img-fluid  w-50 mx-auto d-block"  
          />
        </div>
      </div>
    </div>
  );
}
export default ErrorPage;
