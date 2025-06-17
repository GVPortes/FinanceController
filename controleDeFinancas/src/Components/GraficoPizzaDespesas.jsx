import { useEffect, useState } from "react"
import Chart from "react-google-charts"


const GraficoPizzaDespesas = ({despesas}) => {

    const [valorAluguel, setValorAluguel] = useState(0)
    const [valorLuzAgua, setValorLuzAgua] = useState(0)
    const [valorAlimentacao, setValorAlimentacao] = useState(0)
    const [valorOutros, setValorOutros] = useState(0)

    useEffect(()=>{
        

        let aluguel = 0
        let luzAgua = 0
        let alimentacao = 0
        let outros = 0

        despesas.forEach(item => {
            if (item.tipo == "Aluguel") {
                setValorAluguel(aluguel += item.valor)
            }
            if (item.tipo == "Luz/Agua") {
                setValorLuzAgua(luzAgua + item.valor)
            }
            if (item.tipo == "Alimentação") {
                setValorAlimentacao(alimentacao + item.valor)
            }
            if (item.tipo == "Outros") {
                setValorOutros(outros + item.valor)
            }
        });
    },[despesas])

    const data = [
        ["Tipo", "Valor"],
        ["Aluguel", valorAluguel],
        ["Luz/Agua", valorLuzAgua],
        ["Alimentação", valorAlimentacao],
        ["Outros", valorOutros],
    ];

    const options = {
        title: "Despesas",
    };


    return(
        <Chart
            chartType="PieChart"
            data={data}
            options={options}
            width={"100%"}
            height={"400px"}
        />
    )
}

export default GraficoPizzaDespesas