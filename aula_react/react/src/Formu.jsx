import React, { useState } from "react"
function Formu({saveForm}) {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    return(
        <>
            <h3>Cadastro de usuario</h3>
     
      <form onSubmit = {saveForm}>
        <label htmlFor='Nome'>Nome</label>
        <input type='text' name = 'nome' onChange={(e) => setName(e.target.value)}/>

        <label htmlFor="email">Email</label>
        <input type="email" name="email" onChange={(e) => setEmail(e.target.value) }/>

        <input type="submit" value="cadastrar"/>
      </form>
        </>
    )
   
}
export default Formu