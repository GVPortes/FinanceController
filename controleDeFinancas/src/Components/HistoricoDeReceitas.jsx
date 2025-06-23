

const HistoricoDeReceitas = ({receitas}) => {

    return (
        <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold mb-4">Histórico de Receitas</h3>
            {receitas.length > 0 ? (
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="p-3 text-left font-semibold">Descrição</th>
                                <th className="p-3 text-right font-semibold">Valor</th>
                                <th className="p-3 text-right font-semibold">Tipo</th>
                            </tr>
                        </thead>
                        <tbody>
                            {receitas.map((item, index) => (
                                <tr key={index} className="border-b">
                                    <td className="p-3">{item.descricao}</td>
                                    <td className="p-3 text-green-600 font-medium">
                                        {item.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                                    </td>
                                    <td className="p-3">{item.tipo}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : <p className="text-gray-500">Nenhuma receita adicionada ainda.</p>}
        </div>
    )
}

export default HistoricoDeReceitas