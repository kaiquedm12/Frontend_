function Certo({produtos}) {
   
    return (
        <table>
            <thead>
                <th>ID</th>
                <th>Nome</th>
                <th>Preço</th>
                <th>Estoque</th>
                <th>Acões</th>
                </thead>
            <tbody>
                {produtos.map((product) => (
                    <tr key={product.id}>
                        <td>{product.id}</td>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                        <td>{product.stock}</td>
                        <td class="actions">
                            <button>Editar</button>
                            <button>Excluir</button>
                        </td>

                    </tr>
                ))}
                
            </tbody>
            
        </table>
    )
}
export default Certo


