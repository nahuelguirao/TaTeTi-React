import { useState } from 'react'
import { calcularGanador } from '../helper/CalcularGanador'

export const useTablero = () => {
    const [turnoX, setTurnoX] = useState(true)
    const [tablero, setTablero] = useState(Array(9).fill(null))

    const llenarCasillero = (numeroPosicion) => {
        const tableroActual = [...tablero]
        //Si hay un ganador o el casillero ya fue seleccionado retorna la función
        if (calcularGanador(tableroActual) || tableroActual[numeroPosicion]) {
            return
        }
        //Intercala entre X y O
        tableroActual[numeroPosicion] = turnoX ? 'X' : 'O'
        setTablero(tableroActual)
        setTurnoX(!turnoX)
    }

    //Evalua si hay ganador o empate
    const ganador = calcularGanador(tablero)
    const empate = tablero.every((casilla) => casilla !== null)

    return {
        turnoX,
        tablero,
        setTablero,
        llenarCasillero,
        ganador,
        empate
    }
}
