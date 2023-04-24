import React from "react";
import Title from "../components/Title";
import Movie from "../components/Movie";
import Busca from "../components/Busca";
import { useState } from 'react';


// lista de filmes
const filmes = [{
  "nome": "Joe e as Baratas",
  "ano": "2019",
  "nota": "8.5",
  "foto": "Joe-e-as-Baratas.jpg",
},
{
  "nome": "Avatar",
  "ano": "2020",
  "nota": "7.5",
  "foto": "avatar.png",
},
{
  "nome": "Harry Potter e o Prisioneiro de Azkaban",
  "ano": "2021",
  "nota": "6.5",
  "foto": "harry_potter.png",
},
{
  "nome": "Orgulho e Preconceito",
  "ano": "2022",
  "nota": "7.5",
  "foto": "orgulho_e_preconceito.png",
},
{
  "nome": "Homem Aranha: Longe de casa",
  "ano": "2023",
  "nota": "4.5",
  "foto": "homem-aranha.png",
},
{
  "nome": "Vingadores: Ultimato",
  "ano": "2024",
  "nota": "5.5",
  "foto": "vingadores.png",
},

]


function Home() {

  const [termoDeBusca, setTermoDeBusca] = useState(''); //criar uma variável para armazenar o valor digitado no input

  const [filmesOrdenados, setFilmesOrdenados] = useState("1"); //criar uma variável para armazenar o valor digitado no input


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

    <Movie filmeBusca={termoDeBusca} filmes={filmes} filmesordenados={filmesOrdenados} />
 
    </div>
    
    
  );
}

export default Home;
