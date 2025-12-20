import { useState } from 'react';

const GameGrid = () => {
    const [cells, setCells] = useState<string[]>([]);
    const [gameInProgress, setGameInProgress] = useState(false);

    const startGame = () => {
        setCells(['💎', '💣', '💎', '💎', '💣', '💎']);  // Aggiungi la logica per generare celle dinamicamente
        setGameInProgress(true);
    };

    return (
        <div>
            <div className="grid">
                {cells.map((cell, index) => (
                    <button key={index} className="cell">
                        {gameInProgress && cell}
                    </button>
                ))}
            </div>
            <button onClick={startGame}>Start Game</button>
        </div>
    );
};

export default GameGrid;
