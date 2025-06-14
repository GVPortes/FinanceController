import { useState } from "react";
import CabecalhoPrincipal from "../Components/CabecalhoPrincipal";
import Button from "react-bootstrap/esm/Button";

const ViewPrincipal = () => {
    // --- ESTADOS ---
    const [saldo, setSaldo] = useState(1000.0); // Começar com um saldo para teste
    const [despesas, setDespesas] = useState([]);
    const [receitas, setReceitas] = useState([]);

    // Estados para o formulário de despesa
    const [mostrarFormularioDespesa, setMostrarFormularioDespesa] = useState(false);
    const [nomeDespesa, setNomeDespesa] = useState('');
    const [valorDespesa, setValorDespesa] = useState('');

    // Estados para o formulário de receita
    const [mostrarFormularioReceita, setMostrarFormularioReceita] = useState(false);
    const [nomeReceita, setNomeReceita] = useState('');
    const [valorReceita, setValorReceita] = useState('');

    // --- FUNÇÕES ---
    const adicionarDespesa = () => {
        const valorNumerico = parseFloat(valorDespesa);
        if (nomeDespesa && !isNaN(valorNumerico) && valorNumerico > 0) {
            setSaldo(saldo - valorNumerico);
            setDespesas([...despesas, { nome: nomeDespesa, valor: valorNumerico }]);
            setNomeDespesa('');
            setValorDespesa('');
            setMostrarFormularioDespesa(false);
        }
    };

    const adicionarReceita = () => {
        const valorNumerico = parseFloat(valorReceita);
        if (nomeReceita && !isNaN(valorNumerico) && valorNumerico > 0) {
            setSaldo(saldo + valorNumerico);
            setReceitas([...receitas, { nome: nomeReceita, valor: valorNumerico }]);
            setNomeReceita('');
            setValorReceita('');
            setMostrarFormularioReceita(false);
        }
    };

    const fecharFormularioDespesa = () => {
        setMostrarFormularioDespesa(false);
        setNomeDespesa('');
        setValorDespesa('');
    };

    const fecharFormularioReceita = () => {
        setMostrarFormularioReceita(false);
        setNomeReceita('');
        setValorReceita('');
    };

    // --- RENDERIZAÇÃO ---
    return (
        <>
            <CabecalhoPrincipal />
            <div className="flex items-center justify-center p-4 md:p-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 w-full max-w-4xl">
                    <div className="w-full p-4 border-3 border-solid border-[#157347] bg-gray-300 rounded-lg">
                        <legend className="font-bold">Saldo</legend>
                        <p className="text-2xl pl-4">
                            {saldo.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                        </p>
                    </div>

                    <div className="flex flex-col gap-4">
                        <Button
                            variant="success"
                            type="button"
                            onClick={() => setMostrarFormularioReceita(true)}
                        >
                            Adicionar Receita
                        </Button>
                        <Button
                            variant="danger"
                            type="button"
                            onClick={() => setMostrarFormularioDespesa(true)}
                        >
                            Adicionar Despesa
                        </Button>

                        {/* Formulário de Receita */}
                        {mostrarFormularioReceita && (
                            <div className="flex flex-col gap-2 bg-white p-4 rounded shadow-lg mt-2">
                                <h3 className="font-bold">Nova Receita</h3>
                                <input
                                    type="text"
                                    placeholder="Nome da receita"
                                    value={nomeReceita}
                                    onChange={e => setNomeReceita(e.target.value)}
                                    className="border p-2 rounded"
                                />
                                <input
                                    type="number"
                                    placeholder="Valor"
                                    value={valorReceita}
                                    onChange={e => setValorReceita(e.target.value)}
                                    className="border p-2 rounded"
                                />
                                <div className="flex gap-2 justify-end mt-2">
                                    <Button variant="success" type="button" onClick={adicionarReceita}>
                                        Salvar
                                    </Button>
                                    <Button variant="secondary" type="button" onClick={fecharFormularioReceita}>
                                        Cancelar
                                    </Button>
                                </div>
                            </div>
                        )}

                        {/* Formulário de Despesa */}
                        {mostrarFormularioDespesa && (
                            <div className="flex flex-col gap-2 bg-white p-4 rounded shadow-lg mt-2">
                                <h3 className="font-bold">Nova Despesa</h3>
                                <input
                                    type="text"
                                    placeholder="Nome da despesa"
                                    value={nomeDespesa}
                                    onChange={e => setNomeDespesa(e.target.value)}
                                    className="border p-2 rounded"
                                />
                                <input
                                    type="number"
                                    placeholder="Valor"
                                    value={valorDespesa}
                                    onChange={e => setValorDespesa(e.target.value)}
                                    className="border p-2 rounded"
                                />
                                <div className="flex gap-2 justify-end mt-2">
                                    <Button variant="success" type="button" onClick={adicionarDespesa}>
                                        Salvar
                                    </Button>
                                    <Button variant="secondary" type="button" onClick={fecharFormularioDespesa}>
                                        Cancelar
                                    </Button>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Tabela de Receitas */}
                    {receitas.length > 0 && (
                        <div className="md:col-span-2 mt-8">
                            <h3 className="text-xl font-bold mb-4">Histórico de Receitas</h3>
                            <div className="overflow-x-auto bg-white rounded-lg shadow">
                                <table className="w-full">
                                    <thead className="bg-gray-200">
                                        <tr>
                                            <th className="p-3 text-left font-semibold">Descrição</th>
                                            <th className="p-3 text-right font-semibold">Valor</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {receitas.map((receita, index) => (
                                            <tr key={index} className="border-b border-gray-100">
                                                <td className="p-3">{receita.nome}</td>
                                                <td className="p-3 text-right text-green-600">
                                                    {receita.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}

                    {/* Tabela de Despesas */}
                    {despesas.length > 0 && (
                        <div className="md:col-span-2 mt-8">
                            <h3 className="text-xl font-bold mb-4">Histórico de Despesas</h3>
                            <div className="overflow-x-auto bg-white rounded-lg shadow">
                                <table className="w-full">
                                    <thead className="bg-gray-200">
                                        <tr>
                                            <th className="p-3 text-left font-semibold">Descrição</th>
                                            <th className="p-3 text-right font-semibold">Valor</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {despesas.map((despesa, index) => (
                                            <tr key={index} className="border-b border-gray-100">
                                                <td className="p-3">{despesa.nome}</td>
                                                <td className="p-3 text-right text-red-600">
                                                    {despesa.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default ViewPrincipal;