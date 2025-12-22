// ============================================================================
//  MAIN ENTRY POINT - Punto di ingresso principale
// ============================================================================

// Import di tutti i moduli
import { initGame, closePopup, setCaramelle } from './gameLogic.js';

// Esporta le funzioni principali per l'uso globale
export { initGame, closePopup, setCaramelle };

// Inizializzazione automatica quando il DOM è pronto
if (typeof window !== 'undefined') {
    // Rende le funzioni disponibili globalmente per compatibilità con HTML onclick
    window.initGame = initGame;
    window.closePopup = closePopup;
    window.setCaramelle = setCaramelle;
}
