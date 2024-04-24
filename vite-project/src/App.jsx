import './App.css'
import Cabecalho from './components/Cabecalho'
import Evento from './components/Evento'
import Galeria from './components/Galeria'
import Rodape from './components/Rodape'


function App() {

  return (
    <>
      <Cabecalho/>
      <Evento
       titulo={'tripleS no SENAI'}
       descricao={'Show exclusivo do maior grupo de kpop'}     
       horario={'Ás 15h'}
       local={'SENAI São José'} 
      />
      <Galeria/>
      <Rodape/>
    </>
  )
}

export default App
