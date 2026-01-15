# Football Stats Frontend 🏀⚽

Komplexní React aplikace pro zobrazování a analýzu fotbalových statistik. Aplikace poskytuje podrobné informace o ligách, týmech, hráčích a jejich výkonech.

## Live demo

[Live demo](https://footballstatsapp.netlify.app)

## 📋 Obsah

-   [Přehled](#přehled)
-   [Technologický stack](#technologický-stack)
-   [Instalace a spuštění](#instalace-a-spuštění)
-   [Struktura projektu](#struktura-projektu)
-   [Hlavní funkce](#hlavní-funkce)
-   [API integrace](#api-integrace)
-   [Skripty](#skripty)
-   [Konfigurace](#konfigurace)

## 🎯 Přehled

Football Stats Frontend je moderní webová aplikace vytvořená v Reactu, která umožňuje uživatelům:

-   Procházet fotbalové ligy a sezony
-   Prohlížet tabulky pořadí týmů
-   Sledovat statistiky hráčů (útočníci, obránci, brankáři)
-   Porovnávat výkony týmů
-   Filtrovat a třídít data podle různých kritérií
-   Přepínat mezi světlým a tmavým režimem

## 🛠️ Technologický stack

### Frontend Framework

-   **React 19.2** - UI knihovna
-   **TypeScript 5.9** - Typování JavaScriptu
-   **Vite 7.2** - Build tool a dev server s HMR

### State Management & Data Fetching

-   **TanStack React Query 5.9** - State management a caching dat z API
-   **React Router 7.11** - Routing a navigace
-   **Axios 1.13** - HTTP client

### UI & Styling

-   **Tailwind CSS 4.1** - Utility-first CSS framework
-   **Radix UI** - Headless UI komponenty:
    -   Dialog, Dropdown Menu, Select, Tabs, Slots
-   **Lucide React 0.562** - Ikonová knihovna
-   **Class Variance Authority 0.7** - Variabilní CSS třídy

### Tabling

-   **TanStack React Table 8.21** - Headless table library pro pokročilé tabulky

### Development Tools

-   **ESLint 9.39** - Linting
-   **TypeScript ESLint 8.46** - TypeScript linting

## 📦 Instalace a spuštění

### Předpoklady

-   Node.js 18+ a npm/yarn

### Instalace závislostí

```bash
npm install
```

### Spuštění development serveru

```bash
npm run dev
```

Aplikace bude dostupná na `http://localhost:5173`

### Build pro produkci

```bash
npm run build
```

### Spuštění produkční verze lokálně

```bash
npm run preview
```

### Linting

```bash
npm run lint
```

## 🎨 Hlavní funkce

### 1. **Správa lig** 📊

-   Prohlížení všech dostupných lig
-   Detail jednotlivé ligy s informacemi o sezonách
-   Filtrování a třídění

### 2. **Tabulka pořadí** 🏆

-   Zobrazení aktuální tabulky
-   Sloupce: Pozice, Tým, Zápasy, Výhry, Remízy, Prohry, Skóre, Body
-   Rozšířené sloupce pro podrobnější analýzu
-   Interaktivní řazení

### 3. **Statistiky hráčů** 👥

-   **Útočníci**: Góly, Asistence, Střely, atd.
-   **Obránci**: Zásahy, Skluzavky, Chyby, atd.
-   **Brankáři**: Zákroky, Čisté listy, Inkasované góly, atd.
-   Leaderboardy a porovnání hráčů
-   Detailní karty hráčů

### 4. **Statistiky týmů** ⚙️

-   Celkový výkon týmu
-   Domácí vs. Venkovní výkony
-   Vývoj výkonnosti v průběhu sezony

### 5. **Dark/Light režim** 🌓

-   Přepínaní mezi tmavým a světlým motivem
-   Perzistence volby v local storage

### 6. **Responsivní design** 📱

-   Optimalizováno pro desktop, tablet i mobil
-   Tailwind CSS pro efektivní styling

## 🔌 API integrace

Aplikace komunikuje s backendem přes Axios:

```typescript
// Příklady API volání (v features/*/api)
- GET /leagues              → Všechny ligy
- GET /leagues/:id/seasons  → Sezony ligy
- GET /standings           → Tabulka pořadí
- GET /leaderboards        → Hráčské statistiky
- GET /team/:id           → Detail týmu
```

API volání jsou zabalena v React Query `useQuery` hooks pro automatické caching a synchronizaci.

## 🚀 Skripty

| Skript            | Popis                                                    |
| ----------------- | -------------------------------------------------------- |
| `npm run dev`     | Spustí development server s HMR na http://localhost:5173 |
| `npm run build`   | Vytvoří produkční build (TypeScript check + Vite build)  |
| `npm run preview` | Náhled produkčního buildu                                |
| `npm run lint`    | Spustí ESLint na všechny soubory                         |

## ⚙️ Konfigurace

### Vite

Soubor [vite.config.ts](vite.config.ts) obsahuje:

-   React plugin pro HMR
-   Tailwind CSS plugin
-   Path aliasy (`@`, `@app`, `@shared`, `@features`)

### TypeScript

-   [tsconfig.json](tsconfig.json) - Hlavní konfigurace
-   [tsconfig.app.json](tsconfig.app.json) - App-specific konfigurace
-   [tsconfig.node.json](tsconfig.node.json) - Node/build konfigurace

### ESLint

Soubor [eslint.config.js](eslint.config.js) zajišťuje:

-   TypeScript linting
-   React best practices
-   React Hooks pravidla
-   React Refresh pravidla

### Tailwind CSS

Konfigurace automaticky načtena přes Vite plugin v `vite.config.ts`

### Netlify

Soubor [netlify.toml](netlify.toml):

-   Build command: `npm run build`
-   Publish directory: `dist`
-   SPA redirect na `/index.html`
