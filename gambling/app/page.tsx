import GameControl from '../components/GameControl';
import GameGrid from '../components/GameGrid';
import ThemeSwitcher from '../components/ThemeSwitcher';
import styles from '../styles/gambling.module.css';

const GamePage = () => {
  return (
      <div className={styles.gameContainer}>
        <header className={styles.gameHeader}>
          <div className={styles.balanceDisplay}>
            <span className={styles.balanceLabel}>💰 Saldo</span>
            <span className={styles.balanceAmount}>500 💵</span>
          </div>
        </header>

        <div className={styles.gameLayout}>
          <aside className={styles.controlsPanel}>
            <GameControl />
          </aside>
          <main className={styles.gameArea}>
            <GameGrid />
          </main>
        </div>
        <ThemeSwitcher />
      </div>
  );
};

export default GamePage;
