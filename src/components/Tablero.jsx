import React, { useState } from 'react'
import { calcularGanador } from '../helper/CalcularGanador'
import { MensajeJuego } from './MensajeJuego'
import { BotonReinicio } from './BotonReinicio'
import { motion } from 'framer-motion'

export const Tablero = ({ reseteoAnimacion, keyParaResetear }) => {
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

    //Genera cada casillero con su respectivo indice
    const casillero = (numeroPosicion) => (
        <motion.button className='casillero' onClick={() => llenarCasillero(numeroPosicion)} whileTap={{ scale: 0.5 }} >
            {tablero[numeroPosicion]}
        </motion.button>
    )

    //Evalua si hay ganador o empate
    const ganador = calcularGanador(tablero)
    const empate = tablero.every((casilla) => casilla !== null)

    return (
        <>
            <motion.div className='tablero' animate={{ x: [-300, 0] }} key={keyParaResetear}>
                <div className="fila">
                    {casillero(0)}
                    {casillero(1)}
                    {casillero(2)}
                </div>
                <div className="fila">
                    {casillero(3)}
                    {casillero(4)}
                    {casillero(5)}
                </div>
                <div className="fila">
                    {casillero(6)}
                    {casillero(7)}
                    {casillero(8)}
                </div>
            </motion.div>
            <MensajeJuego ganador={ganador} empate={empate} turnoX={turnoX} />
            <BotonReinicio ganador={ganador} empate={empate} resetTablero={setTablero} reseteoAnimacion={reseteoAnimacion} />
        </>
    )
}
