import CabecalhoPrincipal from "../Components/CabecalhoPrincipal"


const ViewSimulacao = () => {
    const [simulacoes, setSimulacoes] = useState([])
    const [simulacao, setSimulacao] = useState({
        "id": 1,
        "descricao": "",
        "valorTotal": "",
        "tipo": "",
        "valorEntrada": "",
        "quantidadePrestacoes": "",
        "idUser": "",
    })

    const salvarSimulacao = () => {
        setSimulacoes(...simulacoes, simulacao)
        setSimulacao({
            "id": 1,
            "descricao": "",
            "valorTotal": "",
            "tipo": "",
            "valorEntrada": "",
            "quantidadePrestacoes": "",
            "idUser": "",
        })
        
    }
    return (
        <>
            <CabecalhoPrincipal/>
             <div className="flex flex-col gap-2 p-4 rounded-md bg-red-50 border border-red-200 mt-2">
                <h1 className="font-bold">Nova Simulação</h1>
                <input type="text" placeholder="Descrição" value={simulacao.descricao} onChange={(e) => {setSimulacao({...simulacao, "descricao": e.target.value})}} className="border p-2 rounded" />
                <input type="number" placeholder="Valor Total" value={simulacao.valorTotal} onChange={(e) => {setSimulacao({...simulacao, "valorTotal": e.target.value})}} className="border p-2 rounded" />
                <select className="border p-2 rounded" onChange={(e) => {setSimulacao({...simulacao, "tipo": e.target.value})}}>
                    <option>Tipo</option>
                    <option value="Aluguel">Aposentadoria</option>
                    <option value="Luz/Agua">Viagem</option>
                    <option value="Alimentação">Carro</option>
                    <option value="Outros">Outros</option>
                </select>
                <input type="number" placeholder="Valor Entrada" value={simulacao.valorEntrada} onChange={(e) => {setSimulacao({...simulacao, "valorEntrada": e.target.value})}} className="border p-2 rounded" />
                <input type="number" placeholder="Quantidade Prestações" value={simulacao.quantidadePrestacoes} onChange={(e) => {setSimulacao({...simulacao, "quantidadePrestacoes": e.target.value})}} className="border p-2 rounded" />

                <div className="flex gap-2 justify-end mt-2">
                    <Button variant="outline-secondary" size="sm" onClick={salvarSimulacao}>Salvar</Button>
                </div>
            </div>
            <div className="flex flex-col gap-2 p-4 rounded-md bg-red-50 border border-red-200 mt-2">
                <h1 className="font-bold">Simulações</h1>
                <table className="w-full">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="p-3 text-left font-semibold">Descrição</th>
                            <th className="p-3 text-right font-semibold">Valor Total</th>
                            <th className="p-3 text-right font-semibold">Tipo</th>
                            <th className="p-3 text-right font-semibold">Valor Entrada</th>
                            <th className="p-3 text-right font-semibold">Quantidade Prestações</th>
                            <th className="p-3 text-right font-semibold">Valor Prestações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {simulacoes.map((item, index) => (
                            <>
                            <tr key={index} className="border-b">
                                <td className="p-3">{item.descricao}</td>
                                <td className="p-3 text-red-600 font-medium">
                                    {item.valorTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                                </td>
                                <td className="p-3">{item.tipo}</td>
                                <td className="p-3">{item.valorEntrada}</td>
                                <td className="p-3">{item.quantidadePrestacoes}</td>
                                <td className="p-3">{(item.valorTotal - item.valorEntrada) / item.quantidadePrestacoes}</td>
                            </tr>
                            </>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
            
        
    )
}

export default ViewSimulacao