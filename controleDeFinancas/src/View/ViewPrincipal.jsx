import { useState } from "react";
import CabecalhoPrincipal from "../Components/CabecalhoPrincipal";
import Button from "react-bootstrap/Button";

const ViewPrincipal = () => {
    const [saldo, setSaldo] = useState(1000.0);
    const [receitas, setReceitas] = useState([]);
    const [despesas, setDespesas] = useState([]);

    const [mostrarFormularioReceita, setMostrarFormularioReceita] = useState(false);
    const [nomeReceita, setNomeReceita] = useState('');
    const [valorReceita, setValorReceita] = useState('');

    const [mostrarFormularioDespesa, setMostrarFormularioDespesa] = useState(false);
    const [nomeDespesa, setNomeDespesa] = useState('');
    const [valorDespesa, setValorDespesa] = useState('');

    const adicionarReceita = () => {
        const valorNumerico = parseFloat(valorReceita);
        if (nomeReceita && !isNaN(valorNumerico) && valorNumerico > 0) {
            setSaldo(saldo + valorNumerico);
            setReceitas([...receitas, { nome: nomeReceita, valor: valorNumerico }]);
            fecharFormularioReceita();
        } else {
            alert("Por favor, preencha o nome e um valor válido para a receita.");
        }
    };

    const fecharFormularioReceita = () => {
        setMostrarFormularioReceita(false);
        setNomeReceita('');
        setValorReceita('');
    };

    const adicionarDespesa = () => {
        const valorNumerico = parseFloat(valorDespesa);
        if (nomeDespesa && !isNaN(valorNumerico) && valorNumerico > 0) {
            setSaldo(saldo - valorNumerico);
            setDespesas([...despesas, { nome: nomeDespesa, valor: valorNumerico }]);
            fecharFormularioDespesa();
        } else {
            alert("Por favor, preencha o nome e um valor válido para a despesa.");
        }
    };

    const fecharFormularioDespesa = () => {
        setMostrarFormularioDespesa(false);
        setNomeDespesa('');
        setValorDespesa('');
    };

    return (
        <>
            <CabecalhoPrincipal />
            <div className="flex justify-center p-4 md:p-12 bg-gray-50">
                <div className="w-full max-w-6xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        <div className="p-6 border-3 border-solid border-[#157347] bg-white rounded-lg shadow">
                            <legend className="text-lg font-bold text-gray-600">Saldo Atual</legend>
                            <p className="text-4xl font-bold text-gray-800 mt-2">
                                {saldo.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                            </p>
                        </div>

                        <div className="p-6 bg-white rounded-lg shadow flex flex-col gap-4">
                            <div className="grid grid-cols-2 gap-4">
                                <Button variant="success" onClick={() => setMostrarFormularioReceita(true)} disabled={mostrarFormularioReceita}>
                                    Adicionar Receita
                                </Button>
                                <Button variant="danger" onClick={() => setMostrarFormularioDespesa(true)} disabled={mostrarFormularioDespesa}>
                                    Adicionar Despesa
                                </Button>
                            </div>

                            {mostrarFormularioReceita && (
                                <div className="flex flex-col gap-2 p-4 rounded-md bg-green-50 border border-green-200 mt-2">
                                    <h3 className="font-bold">Nova Receita</h3>
                                    <input type="text" placeholder="Ex: Salário" value={nomeReceita} onChange={e => setNomeReceita(e.target.value)} className="border p-2 rounded" />
                                    <input type="number" placeholder="Valor" value={valorReceita} onChange={e => setValorReceita(e.target.value)} className="border p-2 rounded" />
                                    <div className="flex gap-2 justify-end mt-2">
                                        <Button variant="outline-success" size="sm" onClick={adicionarReceita}>Salvar</Button>
                                        <Button variant="outline-secondary" size="sm" onClick={fecharFormularioReceita}>Cancelar</Button>
                                    </div>
                                </div>
                            )}

                            {mostrarFormularioDespesa && (
                                <div className="flex flex-col gap-2 p-4 rounded-md bg-red-50 border border-red-200 mt-2">
                                    <h3 className="font-bold">Nova Despesa</h3>
                                    <input type="text" placeholder="Ex: Aluguel" value={nomeDespesa} onChange={e => setNomeDespesa(e.target.value)} className="border p-2 rounded" />
                                    <input type="number" placeholder="Valor" value={valorDespesa} onChange={e => setValorDespesa(e.target.value)} className="border p-2 rounded" />
                                    <div className="flex gap-2 justify-end mt-2">
                                        <Button variant="outline-danger" size="sm" onClick={adicionarDespesa}>Salvar</Button>
                                        <Button variant="outline-secondary" size="sm" onClick={fecharFormularioDespesa}>Cancelar</Button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white p-6 rounded-lg shadow">
                            <h3 className="text-xl font-bold mb-4">Histórico de Receitas</h3>
                            {receitas.length > 0 ? (
                                <div className="overflow-x-auto">
                                    <table className="w-full">
                                        <thead className="bg-gray-100">
                                            <tr>
                                                <th className="p-3 text-left font-semibold">Descrição</th>
                                                <th className="p-3 text-right font-semibold">Valor</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {receitas.map((item, index) => (
                                                <tr key={index} className="border-b">
                                                    <td className="p-3">{item.nome}</td>
                                                    <td className="p-3 text-right text-green-600 font-medium">
                                                        {item.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            ) : <p className="text-gray-500">Nenhuma receita adicionada ainda.</p>}
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow">
                            <h3 className="text-xl font-bold mb-4">Histórico de Despesas</h3>
                            {despesas.length > 0 ? (
                                <div className="overflow-x-auto">
                                    <table className="w-full">
                                        <thead className="bg-gray-100">
                                            <tr>
                                                <th className="p-3 text-left font-semibold">Descrição</th>
                                                <th className="p-3 text-right font-semibold">Valor</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {despesas.map((item, index) => (
                                                <tr key={index} className="border-b">
                                                    <td className="p-3">{item.nome}</td>
                                                    <td className="p-3 text-right text-red-600 font-medium">
                                                        {item.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            ) : <p className="text-gray-500">Nenhuma despesa adicionada ainda.</p>}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ViewPrincipal;