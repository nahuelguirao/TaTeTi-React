export const calcularGanador = (tablero) => {
    const lineasGanadoras = [
        //Horizontales
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        //Verticales
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        //Cruzado
        [0, 4, 8], [2, 4, 6]
    ]
    //Controla si hay un ta-te-ti
    for (let i = 0; i < lineasGanadoras.length; i++) {
        const [a, b, c] = lineasGanadoras[i]
        if (tablero[a] && tablero[a] === tablero[b] && tablero[a] === tablero[c]) {
            //En caso de que haya un ganador lo retorna
            return tablero[a]
        }
    }

    return null
}
