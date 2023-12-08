import React from 'react'
import { motion } from 'framer-motion'
import { useTablero } from '../hook/useTablero'
import { calcularGanador } from '../helper/CalcularGanador'
import { MensajeJuego } from './MensajeJuego'
import { BotonReinicio } from './BotonReinicio'

export const Tablero = ({ reseteoAnimacion, keyParaResetear }) => {
    const { turnoX, tablero, setTablero, llenarCasillero } = useTablero(calcularGanador)

    //Evalua si hay ganador o empate
    const ganador = calcularGanador(tablero)
    const empate = tablero.every((casilla) => casilla !== null)

    //Genera cada casillero con su respectivo indice
    const casillero = (numeroPosicion) => (
        <motion.button className='casillero' onClick={() => llenarCasillero(numeroPosicion)} whileTap={{ scale: 0.5 }} >
            {tablero[numeroPosicion]}
        </motion.button>
    )

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
