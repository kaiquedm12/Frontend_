function Teste() {
    const a = 5 , b = 2 , nome = 'kaique';
    const aluno = {
        nome : 'kaique',
        email : 'kaique@gmail.com'
    }

    return (
        
            <div>
                <h2> componente de introdução</h2>
                <h3> Template</h3>
                <p>{nome}, o produto entre {a} e {b} é {a * b}</p>
                <p>Aluno {aluno.nome} <br/> E-mail:{aluno.email}</p>
            </div>
            
            
        
    )
}

export default Teste