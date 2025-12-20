import { useState } from 'react';

const GameControl = () => {
    const [difficulty, setDifficulty] = useState('3x3');
    const [bet, setBet] = useState(0);

    const handleDifficultyChange = (diff: string) => {
        setDifficulty(diff);
    };

    const handleBetChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setBet(parseInt(e.target.value, 10));
    };

    return (
        <div>
            <section>
                <h3>Select Difficulty</h3>
                <button onClick={() => handleDifficultyChange('3x3')}>3×3</button>
                <button onClick={() => handleDifficultyChange('4x4')}>4×4</button>
                <button onClick={() => handleDifficultyChange('5x5')}>5×5</button>
            </section>
            <section>
                <h3>Set Bet</h3>
                <input type="number" value={bet} onChange={handleBetChange} />
                <button>Start Game</button>
            </section>
        </div>
    );
};

export default GameControl;
