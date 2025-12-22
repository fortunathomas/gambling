// ============================================================================
//  UTILITY FUNCTIONS - Funzioni helper
// ============================================================================

// Configurazione delle versioni
export const versionSettings = {
    1: { safeBoost: 1.03, bonusFinale: 1.10, gridSize: 9, columns: 3 },
    2: { safeBoost: 1.04, bonusFinale: 1.25, gridSize: 16, columns: 4 },
    3: { safeBoost: 1.06, bonusFinale: 1.50, gridSize: 25, columns: 5 }
};

// Genera un indice casuale per la bomba
export function getRandomBombIndex(maxLength) {
    return Math.floor(Math.random() * maxLength);
}

// Calcola il premio finale
export function calcolaPremio(scommessa, moltiplicatore, bonus) {
    return Math.floor((scommessa * moltiplicatore) * bonus);
}

// Calcola il premio del cashout
export function calcolaPremioChashout(scommessa, moltiplicatore) {
    return Math.floor(scommessa * moltiplicatore);
}

// Valida la scommessa
export function validaScommessa(scommessa, saldo) {
    if (scommessa <= 0) {
        return { valid: false, message: "⚠️ Inserisci una scommessa!" };
    }
    if (scommessa > saldo) {
        return { valid: false, message: "⚠️ Saldo insufficiente!" };
    }
    return { valid: true };
}

// Valida la versione
export function validaVersione(versione) {
    if (versione === 0) {
        return { valid: false, message: "⚠️ Seleziona prima una difficoltà!" };
    }
    return { valid: true };
}

// Ottiene il numero di colonne per la griglia
export function getGridColumns(versione) {
    return versionSettings[versione]?.columns || 3;
}

// Ottiene il numero totale di celle
export function getGridSize(versione) {
    return versionSettings[versione]?.gridSize || 9;
}

// Ottiene il moltiplicatore di sicurezza
export function getSafeBoost(versione) {
    return versionSettings[versione]?.safeBoost || 1.03;
}

// Ottiene il bonus finale
export function getBonusFinale(versione) {
    return versionSettings[versione]?.bonusFinale || 1.10;
}
