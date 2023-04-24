import React from "react";
import { useParams } from "react-router-dom"; // para pegar o id da rota dinâmica (detalhes/:filmeid)
import Comentarios from "../components/Comentarios";

const filmes = [
  {
    foto: "Joe-e-as-Baratas.jpg",
    nome: "Joe e as Baratas",
    duracao: "1H29",
    genero: "Ação/Ficção científica/Suspense/Aventura",
    descricao:
      "O azarado Joe se muda para um novo apartamento em Nova York, infestado por milhares de baratas surreais que cantam e dançam. Ao se tornarem amigos, os insetos acabam mudando a sorte de Joe e o ajudam a conquistar uma linda moça.",
    nota: 5,
    comentarios: [
      {
        nome: "Pedro",
        comentario: "Gráficos incríveis e uma história envolvente!"
      },
      {
        nome: "Ana",
        comentario: "Não gostei muito do enredo, mas os efeitos especiais são impressionantes."
      },
      {
        nome: "Ana",
        comentario: "Não gostei muito do enredo, mas os efeitos especiais são impressionantes."
      },
      {
        nome: "Ana",
        comentario: "Não gostei muito do enredo, mas os efeitos especiais são impressionantes."
      },
      {
        nome: "Ana",
        comentario: "Não gostei muito do enredo, mas os efeitos especiais são impressionantes."
      }
    ]
  },
  {
    foto: "avatar.png",
    nome: "Avatar",
    duracao: "3H12",
    genero: "Ação/Ficção científica/Fantasia/Aventura",
    descricao:
      "A história se passa alguns anos após os eventos do primeiro filme e segue a vida de Jake Sully e Neytiri, agora casados e liderando o seu povo Na'vi.Nesta continuação, Jake e Neytiri enfrentam novos desafios quando uma nova ameaça surge em Pandora. Uma empresa rival da RDA, a Metkayina, começa a explorar a região submarina do planeta e entra em conflito com os Na'vi. Além disso, Jake e Neytiri precisam lidar com o crescimento de sua filha, uma criança híbrida de Na'vi e humano.",
    nota: 5,
    comentarios: [
      {
        nome: "Pedro",
        comentario: "Gráficos incríveis e uma história envolvente!"
      },
      {
        nome: "Ana",
        comentario: "Não gostei muito do enredo, mas os efeitos especiais são impressionantes."
      }
    ]
  },
  {
    foto: "harry_potter.png",
    nome: "Harry Potter e o Prisioneiro de Azkaban",
    duracao: "2H22",
    genero: "Fantasia/Aventura/Ficção",
    descricao:
      "A história começa com Harry Potter retornando para o seu terceiro ano em Hogwarts, a escola de magia e bruxaria. Neste ano, um perigoso criminoso chamado Sirius Black, que foi preso em Azkaban por assassinar 13 pessoas, escapa da prisão e há rumores de que ele esteja procurando por Harry.Harry também descobre que a aula de Defesa Contra as Artes das Trevas será ministrada pelo novo professor Remus Lupin, um homem misterioso que parece ter um interesse especial em Harry. Além disso, há um novo animal na escola, o hipogrifo Bicuço, que vai desempenhar um papel importante na trama.",
    nota: 5,
    comentarios: [
      {
        nome: "Pedro",
        comentario: "Gráficos incríveis e uma história envolvente!"
      },
      {
        nome: "Ana",
        comentario: "Não gostei muito do enredo, mas os efeitos especiais são impressionantes."
      }
    ]
  },
  {
    foto: "orgulho_e_preconceito.png",
    nome: "Orgulho e Preconceito",
    duracao: "2H09",
    genero: "Romance/Drama",
    descricao:
      "Orgulho e Preconceito é um romance clássico da escritora inglesa Jane Austen, publicado em 1813, e já foi adaptado para diversas mídias, incluindo cinema e televisão. O livro conta a história da família Bennet, composta pelo pai, mãe e cinco filhas, que vivem no interior da Inglaterra, no final do século XVIII.A trama se concentra na segunda filha, Elizabeth Bennet, uma jovem inteligente, independente e obstinada que, ao conhecer o rico e arrogante Mr. Darcy, cria uma aversão imediata pelo rapaz. Ao longo do tempo, os dois acabam se aproximando e se apaixonando, mas precisam lidar com as diferenças sociais e os obstáculos impostos pela sociedade da época.",
    nota: 5,
    comentarios: [
      {
        nome: "Pedro",
        comentario: "Gráficos incríveis e uma história envolvente!"
      },
      {
        nome: "Ana",
        comentario: "Não gostei muito do enredo, mas os efeitos especiais são impressionantes."
      }
    ]
  },
  {
    foto: "homem-aranha.png",
    nome: "Homem Aranha: Longe de casa",
    duracao: "2H09",
    genero: "Ação/Aventura/Fantasia",
    descricao:
      "Homem-Aranha: Longe de Casa é um filme de super-herói de 2019, dirigido por Jon Watts e estrelado por Tom Holland como Peter Parker/Homem-Aranha. A história se passa após os eventos de Vingadores: Ultimato e acompanha Peter Parker enquanto ele tenta superar a perda de Tony Stark e lidar com as consequências do chamado blip, o retorno dos que desapareceram durante o estalo de dedos de Thanos.Peter e seus amigos da escola embarcam em uma viagem de férias para a Europa, mas seus planos são interrompidos quando Nick Fury aparece em seu quarto de hotel pedindo ajuda para enfrentar uma nova ameaça: os Elementais, seres poderosos que representam forças da natureza e estão causando destruição em vários pontos do continente.",
    nota: 5,
    comentarios: [
      {
        nome: "Pedro",
        comentario: "Gráficos incríveis e uma história envolvente!"
      },
      {
        nome: "Ana",
        comentario: "Não gostei muito do enredo, mas os efeitos especiais são impressionantes."
      }
    ]
  },
  {
    foto: "vingadores.png",
    nome: "Vingadores: Ultimato",
    duracao: "3H02",
    genero: "Ação/Nerd",
    descricao:
      "Vingadores: Ultimato é um filme de super-herói de 2019, dirigido pelos irmãos Russo, e é o quarto filme da saga dos Vingadores no Universo Cinematográfico da Marvel. A trama começa logo após os eventos de Vingadores: Guerra Infinita e acompanha os heróis tentando desfazer o estalo de dedos de Thanos, que eliminou metade da vida do universo.Os Vingadores sobreviventes se juntam para encontrar uma maneira de reverter o dano causado por Thanos e ressuscitar os mortos. Eles contam com a ajuda de personagens conhecidos, como Capitão América, Homem de Ferro, Thor, Hulk e Viúva Negra, além de outros heróis como a Capitã Marvel e o Homem-Formiga.",
    nota: 5,
    comentarios: [
      {
        nome: "Pedro",
        comentario: "Gráficos incríveis e uma história envolvente!"
      },
      {
        nome: "Ana",
        comentario: "Não gostei muito do enredo, mas os efeitos especiais são impressionantes."
      }
    ]
  },
];

function Detalhes() {
  const { filme } = useParams(); // pegar o id da rota dinâmica (detalhes/:filmeid)

  // retorna o primeiro elemento do array que satisfaz a condição
  // const filmeSelecionado = filmes.find((filmeAtual) => filmeAtual.nome === filme);

  // retorna um array com todos os elementos que satisfazem a condição
  const filmeEscolhido = filmes.filter((f) => f.nome === filme);

  return (
    <div className="container">
      {filmeEscolhido.map((filme, i) => (
        <div class="row">
          <div class="col-sm-6">
            <div className="card1">
              <img
                src={"/assets/images/" + filme.foto}
                alt={filme.nome}
                className="img-fluid w-50"
              />
            </div>
          </div>
          <div class="col-sm-6">
            <div className="card2">
              <div className="card-body">
                <h5 className="card-title">{filme.nome} </h5>
                <p>Duração: {filme.duracao}</p>
                <p>Gênero: {filme.genero}</p>
                <p>Sinopse: {filme.descricao}</p>
                <p>Nota: {filme.nota}</p>

                <a href={`/`}>
                  <div className="btn btn-primary">Assistir</div>
                </a>

                

                
              </div>
              
            </div>
          </div>
          <hr></hr>
          <Comentarios comentarios={filme.comentarios} />
        </div>
      ))}
    </div>
  );
}
export default Detalhes;
