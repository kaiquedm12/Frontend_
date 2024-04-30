import { useState } from 'react';
import './App.css'
import Bonus from './Bonus';
import Certo from './components/Certo';
import Formu from './Formu';

function App() {
  // const produtos = [
  //   {id: '1', nome: 'laranja',preco: 'R$ 10,00', estoque: '20,50'},
  //   {id: '2', nome: 'banana',preco: 'R$ 8,00', estoque: '40,70'},
  //   {id: '3', nome: 'melancia',preco: 'R$ 7,00', estoque: '100,00'},
  //   {id: '4', nome: 'melão',preco: 'R$ 9,00', estoque: '30,00'},
  //   {id: '5', nome: 'uva',preco: 'R$ 11,00', estoque: '50,00'},
  // ];
  const[products, setProducts] = useState ([])
  const[id, setId] = useState (1)
  const[name, setName] = useState ("")
  const[price, setPrice] = useState ("")
  const[stock, setStock] = useState ("")
  const[edit, setEdit] = useState (false)


  const clearForm = () => {
    setName("")
    setPrice("")
    setStock("")
  }

  const saveForm = (e) => {
    e.preventDefault();
    if(!edit) {
      setId( v => v + 1);
      setProducts((prevProducts) => [...prevProducts, {id, name, price, stock}])
    }
    if (edit) {
      const productIndex = products.findIndex(prod => prod.id === id)
      products[productIndex] = {id,name,price,stock}
      setProducts(products)
      setEdit(false)
    }
    clearForm()
  
   
}
 const deleteProduct = (id) => {
      setProducts(products.filter((prod) => prod.id !== id))
    }

    const editProduct = (id) => {
      const product = product.find(prod => prod.id === id)
      setId(product.id)
      setName(product.name)
      setPrice(product.price)
      setStock(product.stock)
      setEdit(true)
    }

    const handleName = (e) => {setName(e.target.value)}
    const handlePrice = (e) => {setPrice(e.target.value)}
    const handleStock= (e) => {setStock(e.target.value)}
    



  return(
    <>
      {console.log(products)}
      <Certo produtos={products} />
      <Bonus handleName={handleName} handlePrice={handlePrice} handleStock={handleStock} saveForm={saveForm} name={name} price={price} stock={stock}/>
      
    </>
  )
}

export default App