import './App.css'
import Certo from './components/Certo';


function App() {
  const produtos = [
    {id: '1', nome: 'laranja',preco: 'R$ 10,00', estoque: '20,50'},
    {id: '2', nome: 'banana',preco: 'R$ 8,00', estoque: '40,70'},
    {id: '3', nome: 'melancia',preco: 'R$ 7,00', estoque: '100,00'},
    {id: '4', nome: 'melão',preco: 'R$ 9,00', estoque: '30,00'},
    {id: '5', nome: 'uva',preco: 'R$ 11,00', estoque: '50,00'},
  ];



  return(
    <>
      <Certo produtos={produtos} />
    </>
  )
}

export default App