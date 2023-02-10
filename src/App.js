import { useState } from 'react';
import Banner from './Componentes/Banner/index';
import Formulario from './Componentes/Formulario';
import Footer from './Componentes/Footer';
import Classificacao from './Componentes/Classificacao';

function App() {
  const classificacao = [
    {
      nome: 'Lactante',
      corPrimaria: '#82CFFA',
      corSecundaria:'#E8F8FF'
    },
    {
      nome: 'Novilha',
      corPrimaria: '#E06B69',
      corSecundaria:'#FDE7E8'
    },
    {
      nome: 'Seca',
      corPrimaria: '#FF8A29',
      corSecundaria:'#FFEEDF'
    }
  ]

  const [animais, setAnimais] = useState([])

  const novoAnimal = (animal) => {setAnimais([...animais, animal])}

  return (
    <div className="App">
        <Banner />
        <Formulario 
          classificacao={classificacao.map(classificacao => classificacao.nome)} 
          animalCadastrado={animal => novoAnimal(animal)}
        />
        {classificacao.map(classificacao => <Classificacao 
          key={classificacao.nome} 
          nome={classificacao.nome}
          corPrimaria={classificacao.corPrimaria}
          corSecundaria={classificacao.corSecundaria}
          animais={animais.filter(animal => animal.classificacao === classificacao.nome)}
        />)}
        <Footer />
    </div>
  );
}

export default App;
