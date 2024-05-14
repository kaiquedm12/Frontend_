import { Link } from "react-router-dom"

export default function Product(){
    
    const products = [
        {id: 1, name:'uva', price:10},
        {id: 2, name:'pera', price:10},
        {id: 3, name:'melão', price:10},
    ]
    return(
        <div>
            <h3>Produtos</h3>
            {products.map ((prod) => (
                <ul key={prod.id} style={{listStyle:'none'}}>
                    <li>Nome:{prod.name}</li>
                    <li>Preço: R$ {prod.price}</li>
                    <li><Link to={'/products/´${prod.id}/info´'}> Mais informações</Link></li>
                    <li><hr /></li>
                    </ul>
            ))}
        </div>
    )
    
}