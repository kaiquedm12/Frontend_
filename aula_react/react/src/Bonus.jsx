import React, { useState } from "react"
function Bonus({saveForm, handleName,handlePrice,handleStock, name , price , stock}){
  


    return(
       <>
       <div className="container">
            <h2>Cadastro de Produtos</h2>
            <form onSubmit={saveForm}>
                <label for = "nome">Nome:</label>
                <input type="text" name="nome" value={name} required onChange={(e) => handleName(e)}/>
                <label for = "preço">Preço:</label>
                <input type="number" name="preço"  value={price} required onChange={(e) => handlePrice(e)}/>
                <label for = "estoque">Estoque:</label>
                <input type="number" name="estoque" value={stock} required onChange={(e) => handleStock(e)}/>
                <input type="submit" value="Cadastrar"></input>
            </form>
        

       </div>
       </>
    )
}   

export default Bonus

