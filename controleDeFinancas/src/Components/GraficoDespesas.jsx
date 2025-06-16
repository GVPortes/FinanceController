import { useEffect, useState } from "react";
import { Chart } from "react-google-charts";

const GraficoDespesas = ({despesas}) => {

    const [valorAluguel, setValorAluguel] = useState(0)
    const [valorLuzAgua, setValorLuzAgua] = useState(0)
    const [valorAlimentacao, setValorAlimentacao] = useState(0)
    const [valorOutros, setValorOutros] = useState(0)
    useEffect(()=>{
        despesas.forEach(item => {
            if (item.tipo == "Aluguel") {
                setValorAluguel(valorAluguel + item.valor)
            }
            if (item.tipo == "Luz/Agua") {
                setValorLuzAgua(valorLuzAgua + item.valor)
            }
            if (item.tipo == "Alimentação") {
                setValorAlimentacao(valorAlimentacao + item.valor)
            }
            if (item.tipo == "Outros") {
                setValorOutros(valorOutros + item.valor)
            }
        });
    },[despesas])
    const data = [
        ["Tipo", "Valor", { role: "style" }],
        ["Aluguel", valorAluguel, "#C22F3D"],
        ["Luz/Agua", valorLuzAgua, "#C22F3D"],
        ["Alimentação", valorAlimentacao, "#C22F3D"],
        ["Outros", valorOutros, "#C22F3D"],
    ];

    return(
        <Chart chartType="ColumnChart" width="100%" height="100%" data={data} />
    )
}

export default GraficoDespesas