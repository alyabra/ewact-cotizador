import { useState, createContext } from "react";
import { obtenerDiferenciaYear, calcularMarca, calcularPlan, formatearDinero } from '../helpers'
const CotizadorContext = createContext()

const CotizadorProvider = ({children}) => {

    const [datos, setDatos] = useState({
        marca: '',
        year: '',
        plan: '',
    })
    const [error, setError] = useState('')
    const [resultado, setResultado] = useState(0)
    const [cargando, setCargando] = useState(false)
    const handleChangeDatos = e => {
        setDatos({
            ...datos,
            [e.target.name] : e.target.value
        })
    }
    const cotizarSeguro = () => {
        // console.log("cotizando")
        // base
        let resultado = 2000
        // obtener diferencia de años
        const diferencia = obtenerDiferenciaYear(datos.year)
        // restar el 3% por cada año
        resultado -=resultado*diferencia*3/(100)
        // Americano 15%

        resultado *=calcularMarca(datos.marca)
        // Eutopeo 30%
        // asiativo 5%
        // Basico 20%

        // completo 50%
        resultado *=calcularPlan(datos.plan)
        resultado = resultado.toFixed(2)
        setCargando(true)
        setTimeout(() => {
            setResultado(formatearDinero(+resultado))
            setCargando(false)
        }, 3000);
         

    }
    return(
        <CotizadorContext.Provider
            value={{
                datos,
                handleChangeDatos,
                error,
                setError,
                cotizarSeguro,
                resultado,
                cargando
            }}
        >
            {children}
        </CotizadorContext.Provider>
    )
}

export {
    CotizadorProvider
}
export default CotizadorContext