import {useState} from 'react'

function MybuttonComponent(){
    const [counter, setCounter] = useState(0);

    const addCounterOnClick = () => setCounter(counter + 1);

    return(
        <button onClick={addCounterOnClick}>
            Clicou {counter} vezes
        </button>

    )
}

export default MybuttonComponent