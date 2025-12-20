// Logica di gioco
export const generateCells = (difficulty: string) => {
    let numCells = 0;
    switch (difficulty) {
        case '3x3':
            numCells = 9;
            break;
        case '4x4':
            numCells = 16;
            break;
        case '5x5':
            numCells = 25;
            break;
        default:
            numCells = 9;
    }
    return new Array(numCells).fill('💎'); // Sostituisci le celle con bombe quando necessario
};
