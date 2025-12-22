// ============================================================================
//  POPUPS - Gestione popup (Win / Lose / Cashout)
// ============================================================================

// Mostra il popup di vittoria
export function showWinPopup() {
    const winOverlay = document.getElementById("winOverlay");
    if (winOverlay) {
        winOverlay.style.display = "flex";
    }
}

// Mostra il popup di sconfitta
export function showLosePopup() {
    const loseOverlay = document.getElementById("loseOverlay");
    if (loseOverlay) {
        loseOverlay.style.display = "flex";
    }
}

// Mostra il popup di cashout
export function showCashoutPopup() {
    const cashoutOverlay = document.getElementById("cashoutOverlay");
    if (cashoutOverlay) {
        cashoutOverlay.style.display = "flex";
    }
}

// Nasconde tutti i popup
export function hideAllPopups() {
    const winOverlay = document.getElementById("winOverlay");
    const loseOverlay = document.getElementById("loseOverlay");
    const cashoutOverlay = document.getElementById("cashoutOverlay");

    if (winOverlay) winOverlay.style.display = "none";
    if (loseOverlay) loseOverlay.style.display = "none";
    if (cashoutOverlay) cashoutOverlay.style.display = "none";
}

// Funzione esportata per chiudere i popup (wrapper per compatibilità)
export function closePopup() {
    hideAllPopups();
}
