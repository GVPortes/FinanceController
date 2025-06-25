import { useEffect, useState } from "react";
import CabecalhoPrincipal from "../Components/CabecalhoPrincipal"
import { useAuth } from "../context/AuthProvider";
import { deleteSimulacoes, getSimulacoes, saveSimulacao } from "../service/Services";
import Button from "react-bootstrap/esm/Button";
import { useNavigate } from "react-router-dom";


const ViewSimulacao = () => {

    const {user, logout} = useAuth()
    const navigate = useNavigate()
    const [simulacoes, setSimulacoes] = useState([])
    const [simulacao, setSimulacao] = useState({
        "descricao": "",
        "valorTotal": "",
        "tipo": "",
        "valorEntrada": "",
        "quantidadePrestacoes": "",
        "idUser": user.id,
    })

    const deletar = async (id) => {
        await deleteSimulacoes(id, user.token)
        carregarDados()
    }

    useEffect(() => {
        const carregarDados = async () => {
                let simulacoesBuscadas = await getSimulacoes(user.id, user.token);

                if (simulacoesBuscadas == null) {
                    logout()
                    navigate("/login")
                }

                setSimulacoes(simulacoesBuscadas)
            }

        carregarDados();
    }, []);

    const carregarDados = async () => {
        let simulacoesBuscadas = await getSimulacoes(user.id, user.token);

        if (simulacoesBuscadas == null) {
            logout()
            navigate("/login")
        }

        setSimulacoes(simulacoesBuscadas)
    }

    const salvarSimulacao = async () => {
        await saveSimulacao(simulacao, user.token)
        setSimulacao({
            "descricao": "",
            "valorTotal": "",
            "tipo": "",
            "valorEntrada": "",
            "quantidadePrestacoes": "",
            "idUser": user.id,
        })
        await carregarDados()
    }
    return (
        <>
            <CabecalhoPrincipal/>
            <div className="flex flex-col items-center justify-center gap-12 mt-10">
                <div className="flex flex-col gap-2 p-4 rounded-md bg-gray-50 border border-gray-200 mt-2 w-[40rem] ">
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
                <div className="flex flex-col gap-2 p-4 rounded-md bg-gray-50 border border-gray-200 mt-2">
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
                                <th className="p-3 text-right font-semibold">Deletar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {simulacoes.map((item, index) => (
                                <tr key={index} className="border-b">
                                    <td className="p-3">{item.descricao}</td>
                                    <td className="p-3 text-red-600 font-medium">
                                        {item.valorTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                                    </td>
                                    <td className="p-3">{item.tipo}</td>
                                    <td className="p-3">{item.valorEntrada}</td>
                                    <td className="p-3">{item.quantidadePrestacoes}</td>
                                    <td className="p-3">{(item.valorTotal-item.valorEntrada)/item.quantidadePrestacoes}</td>
                                    <td className="p-3"><Button variant="danger" onClick={() => deletar(item.id)}>X</Button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
            
        
    )
}

export default ViewSimulacao