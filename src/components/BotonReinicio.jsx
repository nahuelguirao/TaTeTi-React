import React from 'react'
import { motion } from 'framer-motion'

export const BotonReinicio = ({ ganador, empate, resetTablero, reseteoAnimacion }) => {
    return (
        <>
            {(ganador || empate) && (
                <motion.button
                    className='botonReseteo'
                    onClick={() => {
                        resetTablero(Array(9).fill(null))
                        reseteoAnimacion(reseteoAnimacion + 1)
                    }}
                    animate={{ rotate: [360, 0], scale: [0, 1] }}
                    whileHover={{ scale: 1.5 }}
                >
                    Jugar nuevamente!
                </motion.button>
            )}
        </>
    )
}
