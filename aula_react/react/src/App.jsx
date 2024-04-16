import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Teste from './components/Teste'
import ChildComponent from './components/ChildComponent'
import EventComponent from './components/EventComponent'
import Conditional1 from './components/Conditional1'
import Conditional2 from './components/Conditional2'
import ProducutComponent from './components/ProductComponent'
import PostComponent from './components/PostComponent'

function App() {
  //  let component;
  // let condition = false;
  // if(condition) {
  //     component = <Conditional1/>
  // }
  // else{
  //     component = <Conditional2/>
  // } 

  const produtos = [
    { id: 1, nome: 'laranja' , valor: `$8.00 Reais` },
    { id:2, nome:'uva' , valor: `$15.00 Reais`},
    { id:3, nome: 'maçã', valor: `$6.50 Reais`},
    { id:4, nome: 'pera', valor: `$9.84 Reais`},
    { id:5, nome: 'trembolona', valor: `$12.00 Reais`},

 ];

 const posts = [
  {id: 1, title: 'post 1', description: 'Descrição Post 1'},
  {id: 2, title: 'post 2 ', description: 'Descrição Post 2'},
  {id: 3, title: 'post 3', description: 'Descrição Post 3'},
 ]




//  const listaItens = produtos.map(produtos =>
//     <li key={produtos.id}>
//       {produtos.nome}
//     </li>
//   );

  return(
    <>
      {/**
      <ul>{listaItens}</ul>
       * 
       */}

<ul>
        {produtos.map((prod) => (
          <li key={prod.id}>{prod.nome} {prod.valor}</li>
        ))}
      </ul>
      <div className='cor'>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
          {produtos.map((prod) => (
            <tr key={prod.id}>
              <td>{prod.id}</td>
              <td>{prod.nome}</td>
              <td>{prod.valor}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      
     
          {/**
           * 
           {component}
          <div>
              {condition ? <Conditional1/> : <Conditional2/>}
          </div>
           
           */}
           <ProducutComponent name = 'arroz' category = 'alimento' />
           <ProducutComponent name = 'Martelo' category = 'ferramenta'  />
           
           <div>

            {posts.map((post) => (
              <PostComponent key={post.id} title = {post.title} description = {post.description} />
            ))}

           </div>
      </>
  )
  
 
}

export default App
