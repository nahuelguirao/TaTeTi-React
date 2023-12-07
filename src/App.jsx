import { motion } from 'framer-motion'
import { Tablero } from './components/Tablero'
import { useState } from 'react'


function App() {
  //Estado para generar un id distinto para las animaciones en cada reset de juego
  const [resetAnimacion, setResetAnimacion] = useState(0)

  return (
    <div className='containerGeneral'>
      <motion.h1 animate={{ scale: [0, 1.5, 1] }} key={resetAnimacion}>
        TA-TE-TI!
      </motion.h1>
      <Tablero reseteoAnimacion={setResetAnimacion} keyParaResetear={resetAnimacion} />
    </div>
  )
}

export default App
