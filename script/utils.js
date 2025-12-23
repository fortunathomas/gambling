// ============================================================================
//  UTILITY FUNCTIONS - Funzioni helper
// ============================================================================

// House edge (margine del casinò) - 3% è standard
const HOUSE_EDGE = 0.97; // 97% RTP = 3% house edge

// Calcola il moltiplicatore per ogni cella scoperta
// Formula corretta: moltiplica per (1 / probabilità_sicura) ad ogni cella trovata
export function calcolaMoltiplicatorePerCella(totaleCelle, numBombe, celleTrovate) {
    // Se non hai trovato nulla, parte da 1
    if (celleTrovate === 0) return 1.00;

    const celleSicureTotali = totaleCelle - numBombe;

    // Calcola il moltiplicatore moltiplicando per ogni step
    let moltiplicatore = 1.00;

    for (let i = 0; i < celleTrovate; i++) {
        // Celle rimaste PRIMA di scoprire la cella i-esima
        const celleRimastePreClick = totaleCelle - i;

        // Celle sicure rimaste PRIMA di scoprire la cella i-esima
        const celleSicureRimastePreClick = celleSicureTotali - i;

        // Probabilità di trovare una cella sicura in quel momento
        const probabilitaSicura = celleSicureRimastePreClick / celleRimastePreClick;

        // Il payout per quel click è l'inverso della probabilità
        const payoutClick = 1 / probabilitaSicura;

        // Moltiplica il moltiplicatore totale
        moltiplicatore *= payoutClick;
    }

    // Applica house edge
    moltiplicatore *= HOUSE_EDGE;

    // DEBUG
    console.log(`🎲 Trovati: ${celleTrovate}/${celleSicureTotali} → Molt: ${moltiplicatore.toFixed(4)}x`);

    return moltiplicatore;
}

// Calcola il moltiplicatore base in base alla percentuale di bombe
export function getMoltiplicatoreBase(numBombe, totaleCelle) {
    const percentualeBombe = numBombe / totaleCelle;

    if (percentualeBombe >= 0.5) return 1.15;
    if (percentualeBombe >= 0.4) return 1.12;
    if (percentualeBombe >= 0.3) return 1.10;
    if (percentualeBombe >= 0.2) return 1.08;
    if (percentualeBombe >= 0.1) return 1.05;
    return 1.03;
}

// Calcola il bonus finale in base alla difficoltà
export function getBonusFinale(numBombe, totaleCelle) {
    const percentualeBombe = numBombe / totaleCelle;

    if (percentualeBombe >= 0.5) return 2.5;
    if (percentualeBombe >= 0.4) return 2.0;
    if (percentualeBombe >= 0.3) return 1.7;
    if (percentualeBombe >= 0.2) return 1.5;
    if (percentualeBombe >= 0.1) return 1.3;
    return 1.2;
}

// Ottiene il totale celle in base alla versione
export function getTotaleCelle(versione) {
    return versione === 1 ? 9 : versione === 2 ? 16 : versione === 3 ? 25 : 0;
}

// Genera array di indici casuali per le bombe
export function getRandomBombIndexes(totaleCelle, numBombe) {
    const bombe = [];
    while (bombe.length < numBombe) {
        const indiceBomba = Math.floor(Math.random() * totaleCelle);
        if (!bombe.includes(indiceBomba)) {
            bombe.push(indiceBomba);
        }
    }
    return bombe;
}

// Calcola il massimo numero di bombe in base alla griglia
// 3x3 (9 celle) = max 7 bombe
// 4x4 (16 celle) = max 12 bombe
// 5x5 (25 celle) = max 20 bombe
export function getMaxBombe(versione) {
    if (versione === 1) return 7;
    if (versione === 2) return 12;
    if (versione === 3) return 20;
    return 1;
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

// Calcola il premio finale
export function calcolaPremio(scommessa, moltiplicatore, bonus) {
    return Math.floor((scommessa * moltiplicatore) * bonus);
}

// Calcola il premio del cashout
export function calcolaPremioChashout(scommessa, moltiplicatore) {
    return Math.floor(scommessa * moltiplicatore);
}

// Ottiene il numero di colonne per la griglia
export function getGridColumns(versione) {
    return versione === 1 ? 3 : versione === 2 ? 4 : versione === 3 ? 5 : 3;
}

// Ottiene il numero totale di celle (alias di getTotaleCelle)
export function getGridSize(versione) {
    return getTotaleCelle(versione);
}