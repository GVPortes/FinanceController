import { useEffect, useState } from "react"
import Chart from "react-google-charts"

const GraficoPizzaReceitas = ({receitas}) => {

    const [valorSalario, setValorSalario] = useState(0)
    const [valorTransferencias, setValorTransferencias] = useState(0)
    const [valorOutros, setValorOutros] = useState(0)
    useEffect(()=>{
        receitas.forEach(item => {
            if (item.tipo == "Salario") {
                setValorSalario(valorSalario + item.valor)
            }
            if (item.tipo == "Tranferencias") {
                setValorTransferencias(valorTransferencias + item.valor)
            }
            if (item.tipo == "Outros") {
                setValorOutros(valorOutros + item.valor)
            }
        });
    },[receitas])

    const data = [
        ["Tipo", "Valor"],
        ["Salario", valorSalario],
        ["Transferencias", valorTransferencias],
        ["Outros", valorOutros],
    ];

    const options = {
        title: "Receitas",
    };
    
    return (
        <Chart
            chartType="PieChart"
            data={data}
            options={options}
            width={"100%"}
            height={"400px"}
        />
    )
}

export default GraficoPizzaReceitas