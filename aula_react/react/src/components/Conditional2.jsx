function Conditional2 (){
    let count = 0;
    const countEvent = () => {
        console.log(count += 1)
    }
    
    return(
        <div>
            <button onClick={countEvent}> Não clique aqui!!!!</button>
        </div>

    )
}

export default Conditional2