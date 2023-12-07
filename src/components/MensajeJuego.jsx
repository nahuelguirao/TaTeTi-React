import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import confetti from 'canvas-confetti'

export const MensajeJuego = ({ ganador, empate, turnoX }) => {
    if (ganador) {
        useEffect(() => {
            confetti()
        }, [ganador])
    }

    return (
        <div className='turnoActual'>
            {ganador
                ? (<motion.p animate={{ scale: [0, .2, 1] }}>¡Ha ganado {ganador}!</motion.p>)
                : empate
                    ?
                    (<motion.p animate={{ scale: [0, .2, 1] }}>¡Ha habido un empate!</motion.p>)
                    :
                    (<motion.p key={turnoX ? 'X' : 'O'} animate={{ rotate: [-2, 0, 2, 0, -2] }} transition={{ repeat: Infinity }}>
                        Es el turno de {turnoX ? 'X' : 'O'}
                    </motion.p>)
            }
        </div >
    )
}
