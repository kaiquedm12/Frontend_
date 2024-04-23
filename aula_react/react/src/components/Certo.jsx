function Certo({produtos}) {
    return (
        <table>
            <thead>
                <th>id</th>
                <th>nome</th>
                <th>preço</th>
                <th>estoque</th>
                <th>acões</th>
            </thead>
            <tbody>
                {produtos.map(product => (
                    <tr>
                        <td>{product.id}</td>
                        <td>{product.nome}</td>
                        <td>{product.preco}</td>
                        <td>{product.estoque}</td>
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


