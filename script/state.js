// ============================================================================
//  STATE MANAGEMENT - Gestione stato del gioco
// ============================================================================

// Variabili di stato
export let versione = 0;
export let inGioco = false;
export let totalescommessa = 0;
export let cmoltiplicatore = 1;
export let trovati = 0;
export let numBombe = 1; // ← AGGIUNTO

// Setters per modificare lo stato
export function setVersione(v) {
    versione = v;
}

export function setInGioco(value) {
    inGioco = value;
}

export function setTotalescommessa(value) {
    totalescommessa = value;
}

export function setMoltiplicatore(value) {
    cmoltiplicatore = value;
}

export function setTrovati(value) {
    trovati = value;
}

export function setNumBombe(value) { // ← AGGIUNTO
    numBombe = value;
}

export function incrementTrovati() {
    trovati++;
}

// NOTA: multiplyMoltiplicatore non è più usato, ora usiamo setMoltiplicatore direttamente

// ============================================================================
//  GESTIONE SALDO (CARAMELLE)
// ============================================================================
export function setCaramelle(n) {
    if (n < 0) n = 0;
    const elemento = document.getElementById("caramelle");
    if (elemento) {
        elemento.textContent = n.toString();
    }
}

export function getCaramelle() {
    return parseInt(document.getElementById("caramelle")?.textContent) || 0;
}

// ============================================================================
//  GESTIONE SCOMMESSA
// ============================================================================
export function updateScommessaInput(value) {
    const scommessa = document.getElementById("scommessa");
    if (scommessa && scommessa instanceof HTMLInputElement) {
        scommessa.value = value.toString();
    }
}

// NOTA: resetScommessa non è più usato

// ============================================================================
//  GESTIONE MOLTIPLICATORE
// ============================================================================
export function aggiornaMoltiplicatore() {
    const moltiplicatoreEl = document.getElementById("moltiplicatore");
    const vincitaEl = document.getElementById("vincita");
    const celleSicureEl = document.getElementById("celleSicure");
    const totaleCelleEl = document.getElementById("totaleCelle");

    // DEBUG
    console.log(`💰 Aggiornamento display:`);
    console.log(`   - Moltiplicatore: ${cmoltiplicatore.toFixed(2)}x`);
    console.log(`   - Scommessa: ${totalescommessa}`);
    console.log(`   - Vincita potenziale: ${Math.floor(totalescommessa * cmoltiplicatore)}`);
    console.log(`   - Elemento molt trovato: ${!!moltiplicatoreEl}`);
    console.log(`   - Elemento vincita trovato: ${!!vincitaEl}`);

    if (moltiplicatoreEl) {
        moltiplicatoreEl.textContent = cmoltiplicatore.toFixed(2);
        console.log(`   ✅ Molt aggiornato a: ${moltiplicatoreEl.textContent}`);
    } else {
        console.log(`   ❌ Elemento moltiplicatore NON trovato!`);
    }

    if (vincitaEl) {
        const vincita = Math.floor(totalescommessa * cmoltiplicatore);
        vincitaEl.textContent = vincita.toString();
        console.log(`   ✅ Vincita aggiornata a: ${vincitaEl.textContent}`);
    } else {
        console.log(`   ❌ Elemento vincita NON trovato!`);
    }

    // Aggiorna contatore celle sicure
    const totaleCelle = getTotaleCelle(versione);
    const celleSicureTotali = totaleCelle - numBombe;
    if (celleSicureEl) celleSicureEl.textContent = trovati.toString();
    if (totaleCelleEl) totaleCelleEl.textContent = celleSicureTotali.toString();

    if (inGioco && cmoltiplicatore > 1) {
        const moltParent = moltiplicatoreEl?.parentElement;
        const vincParent = vincitaEl?.parentElement;

        if (moltParent) moltParent.classList.add('pulse');
        if (vincParent) vincParent.classList.add('pulse');

        setTimeout(() => {
            if (moltParent) moltParent.classList.remove('pulse');
            if (vincParent) vincParent.classList.remove('pulse');
        }, 500);
    }
}

// Helper per ottenere il totale celle
function getTotaleCelle(versione) {
    return versione === 1 ? 9 : versione === 2 ? 16 : versione === 3 ? 25 : 0;
}

// ============================================================================
//  RESET STATO
// ============================================================================
export function resetState(keepBet = false) {
    versione = 0;
    inGioco = false;

    if (!keepBet) {
        totalescommessa = 0;
        updateScommessaInput(0);
    }

    cmoltiplicatore = 1;
    trovati = 0;
    numBombe = 1;
    aggiornaMoltiplicatore();
}