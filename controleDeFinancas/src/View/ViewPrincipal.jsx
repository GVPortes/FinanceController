import { useState } from "react"
import CabecalhoPrincipal from "../Components/CabecalhoPrincipal"
import Button from "react-bootstrap/esm/Button"


const ViewPrincipal = () => {

    const [saldo, setSaldo] = useState(0.0)

    return(
        <>
            <CabecalhoPrincipal />
            <div className="flex items-center justify-center p-20">
                <div className="grid grid-cols-2 gap-16">
                    <div className="w-80 border-3 border-solid border-[#157347] bg-gray-300">
                        <legend>Saldo</legend>
                        <p className="text-2xl pl-10">{saldo}</p>
                    </div>
                    <div className="flex flex-col gap-6">
                        <Button variant="success" type="submit">
                            Adicionar receita
                        </Button>
                        <Button variant="success" type="submit">
                            Adicionar despesa
                        </Button>
                    </div>
                    <div className="w-100 border-3 border-solid border-[#157347] bg-gray-300 col-span-2 flex flex-col">
                        <legend>Graficos</legend>
                        <img src="imgs/exemploGrafico.png" />
                    </div>
                </div>
            </div>
        </>
    )
}
export default ViewPrincipal