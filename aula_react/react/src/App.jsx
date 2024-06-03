import { useEffect, useState } from 'react';
import './App.css'
import Bonus from './Bonus';
import Certo from './components/Certo';
import Formu from './Formu';
import Login from './components/Login';

function App() {
  // const produtos = [
  //   {id: '1', nome: 'laranja',preco: 'R$ 10,00', estoque: '20,50'},
  //   {id: '2', nome: 'banana',preco: 'R$ 8,00', estoque: '40,70'},
  //   {id: '3', nome: 'melancia',preco: 'R$ 7,00', estoque: '100,00'},
  //   {id: '4', nome: 'melão',preco: 'R$ 9,00', estoque: '30,00'},
  //   {id: '5', nome: 'uva',preco: 'R$ 11,00', estoque: '50,00'},
  // ];
  const[products, setProducts] = useState ([])
  const[id, setId] = useState ("")
  const[name, setName] = useState ("")
  const[price, setPrice] = useState ("")
  const[stock, setStock] = useState ("")
  const[usuario, setUsuario] = useState("")
  const[senha, setSenha] = useState("")
  const[edit, setEdit] = useState (false)

  const url = 'http://localhost:3000/products';

  useEffect(() => {
    const getProductslist = async() => {
      const res = await fetch(url);
      const data = await res.json();
      setProducts(data);
    }

    getProductslist();
  }, [])

  const clearForm = () => {
    setName("")
    setPrice("")
    setStock("")
  }

  const getProductById = async (id) => {
    const res = await fetch(url + `?id=${id}`);
    const data = await res.json();

    setName(data[0].name);
    setPrice(data[0].price);
    setStock(data[0].stock);
    setId(data[0].id);

    setId(true);
  }

  const saveProduct = async (e) => {
    e.preventDefault();
    const saveRequestParams ={
      method: edit ? "PUT" : "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({name, price, stock})
    }

    const save_url = edit ? url + `/${id}` : url;

    const res = await fetch(save_url, saveRequestParams);

    if(!edit) {
     const newProduct = await res.json();
     setProducts((prevProducts) => [... prevProducts, newProduct]);
    }

    if (edit) {
      const editedProduct = await res.json();
      const editedProductIndex = products.findIndex(prod => prod.id === id);
      products[editedProductIndex] = editedProduct;
      setProducts(products);
    }
    clearForm();
    setEdit(false);
  
}
 const deleteProduct = async (id) => {
      const res = await fetch(url + `/${id}`, {
        method: "DELETE",
        headers: {
          "content-type": "application/json"
        },
      });

      const deleteProduct = await res.json();
      setProducts(products.filter(prod => prod.id !== deleteProduct.id));
    }

    const handleName = (e) => {setName(e.target.value)}
    const handlePrice = (e) => {setPrice(e.target.value)}
    const handleStock= (e) => {setStock(e.target.value)}
    


    const handleUsuario = (e) => {setUsuario(e.target.value)};
    const handleSenha = (e) => {setSenha(e.target.value)};
  
    return (
      <>
        <Login usuario={usuario} senha={senha} handleUsuario={handleUsuario} handleSenha={handleSenha}/>
      </>
    )
  }

export default App