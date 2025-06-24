import { useEffect, useState } from "react";
import CabecalhoPrincipal from "../Components/CabecalhoPrincipal";
import Button from "react-bootstrap/Button";
import HistoricoDeReceitas from "../Components/HistoricoDeReceitas";
import HistoricoDeDespesas from "../Components/HistoricoDeDespesas";
import GraficoReceitas from "../Components/GraficoReceitas";
import GraficoDespesas from "../Components/GraficoDespesas";
import GraficoPizzaReceitas from "../Components/GraficoPizzaReceitas";
import GraficoPizzaDespesas from "../Components/GraficoPizzaDespesas";
import { useAuth } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";
import { buscaUserAPI, getDespesas, getReceitas, saveDespesa, saveReceita } from "../service/Services";

const ViewPrincipal = () => {

    const {user, logout} = useAuth()
    const navigate = useNavigate()

    const [saldo, setSaldo] = useState(0);
    const [receitas, setReceitas] = useState([]);
    const [despesas, setDespesas] = useState([]);


    useEffect(() => {
        const carregarDados = async () => {
            if (user == null) {
                navigate("/login");
            } else {
                let receitasBuscadas = await getReceitas(user.id, user.token);
                let despesasBuscadas = await getDespesas(user.id, user.token);
                let userBuscado = await buscaUserAPI(user.nome, user.token)
                

                if (receitasBuscadas == null || despesasBuscadas == null || userBuscado == null) {
                    logout()
                    navigate("/login");
                }

                let saldo = userBuscado[0].saldo
                receitasBuscadas.forEach(item => {
                    saldo += item.valor
                });

                despesasBuscadas.forEach(item => {
                    saldo -= item.valor
                });

                setSaldo(saldo);
                setReceitas(receitasBuscadas);
                setDespesas(despesasBuscadas);
            }
        };

        carregarDados();
    }, []);

    const carregarDados = async () => {
        let receitasBuscadas = await getReceitas(user.id, user.token);
        let despesasBuscadas = await getDespesas(user.id, user.token);
        let userBuscado = await buscaUserAPI(user.nome, user.token)
        let saldo = userBuscado[0].saldo

        receitasBuscadas.forEach(item => {
            saldo += item.valor
        });

        despesasBuscadas.forEach(item => {
            saldo -= item.valor
        });

        setSaldo(saldo);
        setReceitas(receitasBuscadas);
        setDespesas(despesasBuscadas);
    };

    const [mostrarFormularioReceita, setMostrarFormularioReceita] = useState(false);
    const [nomeReceita, setNomeReceita] = useState('');
    const [valorReceita, setValorReceita] = useState('');
    const [tipoReceita, setTipoReceita] = useState('');
    const [receita, setReceita] = useState({
        "id": 1,
        "descricao": "",
        "valor": 0,
        "tipo": "",
        "idUser": 0
    })

    const [mostrarFormularioDespesa, setMostrarFormularioDespesa] = useState(false);
    const [nomeDespesa, setNomeDespesa] = useState('');
    const [valorDespesa, setValorDespesa] = useState('');
    const [tipoDespesa, setTipoDespesa] = useState('');
    const [despesa, setDesepesa] = useState({
        "id": 1,
        "descricao": "",
        "valor": 0,
        "tipo": "",
        "idUser": 0
    })


    const adicionarReceita = async () => {
        const valorNumerico = parseFloat(valorReceita);
        if (nomeReceita && !isNaN(valorNumerico) && valorNumerico > 0) {
            setSaldo(saldo + valorNumerico);
            setReceitas([...receitas, { nome: nomeReceita, valor: valorNumerico, tipo: tipoReceita}]);
            fecharFormularioReceita();
        } else {
            alert("Por favor, preencha o nome e um valor válido para a receita.");
        }
        // setReceita({...receita, "idUser": user.id})
        // const valorNumerico = parseFloat(receita.valor);
        // if (receita.descricao && !isNaN(valorNumerico) && valorNumerico > 0) {
        //     await saveReceita(receita, user.token)
        //     carregarDados()
        //     fecharFormularioReceita();
        // } else {
        //     alert("Por favor, preencha o nome e um valor válido para a receita.");
        // }
    };

    const fecharFormularioReceita = () => {
        setMostrarFormularioReceita(false);
        setNomeReceita('');
        setValorReceita('');
    };

    const adicionarDespesa = async () => {
        const valorNumerico = parseFloat(valorDespesa);
        if (nomeDespesa && !isNaN(valorNumerico) && valorNumerico > 0) {
            setSaldo(saldo - valorNumerico);
            setDespesas([...despesas, { nome: nomeDespesa, valor: valorNumerico, tipo: tipoDespesa }]);
            fecharFormularioDespesa();
        } else {
            alert("Por favor, preencha o nome e um valor válido para a despesa.");
        }
        // setDesepesa({...despesa, "idUser": user.id})
        // const valorNumerico = parseFloat(despesa.valor);
        // if (despesa.descricao && !isNaN(valorNumerico) && valorNumerico > 0) {
        //     await saveDespesa(despesa, user.token)
        //     carregarDados()
        //     fecharFormularioReceita();
        // } else {
        //     alert("Por favor, preencha o nome e um valor válido para a receita.");
        // }
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
                                {saldo}
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
                                    <input type="text" placeholder="Descrição" value={nomeReceita} onChange={e => setNomeReceita(e.target.value)} className="border p-2 rounded" />
                                    <input type="number" placeholder="Valor" value={valorReceita} onChange={e => setValorReceita(e.target.value)} className="border p-2 rounded" />
                                    <select className="border p-2 rounded" onChange={e => setTipoReceita(e.target.value)}>
                                        <option>Tipo</option>
                                        <option value="Salario">Salario</option>
                                        <option value="Tranferencias">Tranferencias</option>
                                        <option value="Outros">Outros</option>
                                    </select>
                                    {/* <input type="text" placeholder="Descrição" value={receita.descricao} onChange={(e) => {setReceita({...receita, "descricao": e.target.value})}} className="border p-2 rounded" />
                                    <input type="number" placeholder="Valor" value={receita.valor} onChange={(e) => {setReceita({...receita, "valor": e.target.value})}} className="border p-2 rounded" />
                                    <select className="border p-2 rounded" value={receita.tipo} onChange={(e) => {setReceita({...receita, "tipo": e.target.value})}}>
                                        <option>Tipo</option>
                                        <option value="Salario">Salario</option>
                                        <option value="Tranferencias">Tranferencias</option>
                                        <option value="Outros">Outros</option>
                                    </select> */}
                                    <div className="flex gap-2 justify-end mt-2">
                                        <Button variant="outline-success" size="sm" onClick={adicionarReceita}>Salvar</Button>
                                        <Button variant="outline-secondary" size="sm" onClick={fecharFormularioReceita}>Cancelar</Button>
                                    </div>
                                </div>
                            )}

                            {mostrarFormularioDespesa && (
                                <div className="flex flex-col gap-2 p-4 rounded-md bg-red-50 border border-red-200 mt-2">
                                    <h3 className="font-bold">Nova Despesa</h3>
                                    <input type="text" placeholder="Descrição" value={nomeDespesa} onChange={e => setNomeDespesa(e.target.value)} className="border p-2 rounded" />
                                    <input type="number" placeholder="Valor" value={valorDespesa} onChange={e => setValorDespesa(e.target.value)} className="border p-2 rounded" />
                                    <select className="border p-2 rounded" onChange={e => setTipoDespesa(e.target.value)}>
                                        <option>Tipo</option>
                                        <option value="Aluguel">Aluguel</option>
                                        <option value="Luz/Agua">Luz/Agua</option>
                                        <option value="Alimentação">Alimentação</option>
                                        <option value="Outros">Outros</option>
                                    </select>
                                    {/* <input type="text" placeholder="Descrição" value={despesa.descricao} onChange={(e) => {setDesepesa({...despesa, "descricao": e.target.value})}} className="border p-2 rounded" />
                                    <input type="number" placeholder="Valor" value={despesa.valor} onChange={(e) => {setDesepesa({...despesa, "valor": e.target.value})}} className="border p-2 rounded" />
                                    <select className="border p-2 rounded" value={despesa.tipo} onChange={(e) => {setDesepesa({...despesa, "tipo": e.target.value})}}>
                                        <option>Tipo</option>
                                        <option value="Aluguel">Aluguel</option>
                                        <option value="Luz/Agua">Luz/Agua</option>
                                        <option value="Alimentação">Alimentação</option>
                                        <option value="Outros">Outros</option>
                                    </select> */}
                                    <div className="flex gap-2 justify-end mt-2">
                                        <Button variant="outline-danger" size="sm" onClick={adicionarDespesa}>Salvar</Button>
                                        <Button variant="outline-secondary" size="sm" onClick={fecharFormularioDespesa}>Cancelar</Button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 ">
                        <HistoricoDeReceitas receitas={receitas}/>
                        <HistoricoDeDespesas despesas={despesas}/>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <GraficoReceitas receitas={receitas}/>
                        <GraficoDespesas despesas={despesas}/>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <GraficoPizzaReceitas receitas={receitas}/>
                        <GraficoPizzaDespesas despesas={despesas}/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ViewPrincipal;