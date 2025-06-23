import { useEffect, useState } from "react";
import { Chart } from "react-google-charts";

const GraficoReceitas = ({receitas}) => {

    const [valorSalario, setValorSalario] = useState(0)
    const [valorTransferencias, setValorTransferencias] = useState(0)
    const [valorOutros, setValorOutros] = useState(0)
    useEffect(()=>{
        let salario = 0
        let transferencias = 0
        let outros = 0

        receitas.forEach(item => {
            if (item.tipo == "Salario") {
                setValorSalario(salario += item.valor)
            }
            if (item.tipo == "Transferencias") {
                setValorTransferencias(transferencias += item.valor)
            }
            if (item.tipo == "Outros") {
                setValorOutros(outros += item.valor)
            }
        });
    },[receitas])
    const data = [
        ["Tipo", "Valor", { role: "style" }],
        ["Salario", valorSalario, "#157347"],
        ["Transferencias", valorTransferencias, "#157347"],
        ["Outros", valorOutros, "#157347"],
    ];

    return(
        <Chart chartType="ColumnChart" width="100%" height="100%" data={data} />
    )
}

export default GraficoReceitas