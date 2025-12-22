// ============================================================================
//  THEME MANAGEMENT - Gestione temi
// ============================================================================

export let currentTheme = 'default';

// Definizione dei temi disponibili
export const themes = {
    default: {
        primary: '#ffc400',
        primaryHover: '#ffae00',
        secondary: '#00cc66',
        background: '#0b0f1a',
        cardBg: '#111627',
        cellBg: '#1a2030',
        text: '#ffffff',
        textDark: '#000000'
    },
    dark: {
        primary: '#60a5fa',
        primaryHover: '#3b82f6',
        secondary: '#a78bfa',
        background: '#000000',
        cardBg: '#1a1a1a',
        cellBg: '#2a2a2a',
        text: '#f9fafb',
        textDark: '#000000'
    },
    neon: {
        primary: '#ec4899',
        primaryHover: '#db2777',
        secondary: '#06b6d4',
        background: '#0f172a',
        cardBg: '#1e293b',
        cellBg: '#334155',
        text: '#f0abfc',
        textDark: '#0f172a'
    },
    forest: {
        primary: '#10b981',
        primaryHover: '#059669',
        secondary: '#34d399',
        background: '#064e3b',
        cardBg: '#065f46',
        cellBg: '#047857',
        text: '#d1fae5',
        textDark: '#064e3b'
    },
    sunset: {
        primary: '#f59e0b',
        primaryHover: '#d97706',
        secondary: '#ef4444',
        background: '#7c2d12',
        cardBg: '#9a3412',
        cellBg: '#b45309',
        text: '#fef3c7',
        textDark: '#7c2d12'
    },
    ocean: {
        primary: '#0ea5e9',
        primaryHover: '#0284c7',
        secondary: '#06b6d4',
        background: '#0c4a6e',
        cardBg: '#075985',
        cellBg: '#0369a1',
        text: '#e0f2fe',
        textDark: '#0c4a6e'
    }
};

// Mappatura tema -> immagine
const themeImages = {
    'default': 'images/gray-square.png',
    'dark': 'images/scuro-square.png',
    'neon': 'images/neon-square.png',
    'forest': 'images/forest-square.png',
    'sunset': 'images/tramonto-square.png',
    'ocean': 'images/oceano-square.png'
};

// Ottiene l'immagine per un tema specifico
export function getThemeImage(theme) {
    return themeImages[theme] || themeImages['default'];
}

// Applica un tema all'interfaccia
export function applyTheme(themeName) {
    currentTheme = themeName;
    const theme = themes[themeName];
    
    if (!theme) return;

    // Applica le variabili CSS
    document.documentElement.style.setProperty('--color-primary', theme.primary);
    document.documentElement.style.setProperty('--color-primary-hover', theme.primaryHover);
    document.documentElement.style.setProperty('--color-secondary', theme.secondary);
    document.documentElement.style.setProperty('--color-background', theme.background);
    document.documentElement.style.setProperty('--color-card-bg', theme.cardBg);
    document.documentElement.style.setProperty('--color-cell-bg', theme.cellBg);
    document.documentElement.style.setProperty('--color-text', theme.text);
    document.documentElement.style.setProperty('--color-text-dark', theme.textDark);

    // Aggiorna i pulsanti del menu tema
    document.querySelectorAll('.theme-option').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.theme === themeName) {
            btn.classList.add('active');
        }
    });
}

// Aggiorna le immagini delle celle durante il gioco
export function updateCellImages(celle, cliccata) {
    celle.forEach((cella, index) => {
        if (!cliccata[index]) {
            const img = cella.querySelector('img.cella-img');
            if (img) {
                img.src = getThemeImage(currentTheme);
            }
        }
    });
}

// Inizializza il theme switcher
export function initThemeSwitcher(onThemeChange) {
    const themeButton = document.getElementById('theme-button');
    const themeMenu = document.getElementById('theme-menu');

    if (!themeButton || !themeMenu) {
        console.error("Theme switcher elements not found");
        return;
    }

    // Toggle del menu
    themeButton.addEventListener('click', () => {
        themeMenu.classList.toggle('hidden');
    });

    // Listener per ogni opzione tema
    document.querySelectorAll('.theme-option').forEach(btn => {
        btn.addEventListener('click', () => {
            applyTheme(btn.dataset.theme);
            themeMenu.classList.add('hidden');
            
            // Callback per aggiornare le celle se il gioco è in corso
            if (onThemeChange) {
                onThemeChange(btn.dataset.theme);
            }
        });
    });

    // Applica il tema default all'avvio
    applyTheme('default');
}
