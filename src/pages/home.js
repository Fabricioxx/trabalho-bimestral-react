import Title from "../components/Title";
import Movie from "../components/Movie";
import Busca from "../components/Busca";
import { useState } from 'react';


function Home() {

  

  const [termoDeBusca, setTermoDeBusca] = useState(''); //criar uma variável para armazenar o valor digitado no input

  const [filmesOrdenados, setFilmesOrdenados] = useState(""); //criar uma variável para armazenar o valor digitado no input


     function handleTermoDeBusca(termo) {
        
           setTermoDeBusca(termo);
     }

      function handleFilmesOrdenados(filmesordenar) {

        setFilmesOrdenados(filmesordenar); // recebe o valor da variável props

      }


  return (
    
    <div>
    <Title title="Catalogo de Filmes" />

    <Busca onTermoDeBusca={handleTermoDeBusca} onOpcaoDeOrdenacao={handleFilmesOrdenados} /> {/* onTermoDeBusca(props) que recebe um metodo(handleTermoDeBusca) - enviar o valor digitado no input para o componente pai */}

    <Movie termoDeBusca={termoDeBusca} filmesOrdenados={filmesOrdenados} />
 
    </div>
    
    
  );
}

export default Home;
