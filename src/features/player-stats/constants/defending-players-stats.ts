import type { StatConfig } from '../types/player-stat-config';

export const DEFENDING_STATS: StatConfig[] = [
    // ========================
    // CORE DEFENDING
    // ========================
    {
        id: 'tackles',
        statsId: [78],
        title: 'Tackles',
        description: 'Total tackles made.',
        isPercentage: false,
        compute: (value) => value,
    },
    {
        id: 'interceptions',
        statsId: [100],
        title: 'Interceptions',
        description: 'Total interceptions.',
        isPercentage: false,
        compute: (value) => value,
    },
    {
        id: 'clearances',
        statsId: [101],
        title: 'Clearances',
        description: 'Total clearances.',
        isPercentage: false,
        compute: (value) => value,
    },
    {
        id: 'blockedShots',
        statsId: [97],
        title: 'Blocked shots',
        description: 'Total blocked shots.',
        isPercentage: false,
        compute: (value) => value,
    },

    // ========================
    // DUELS
    // ========================
    {
        id: 'totalDuels',
        statsId: [105],
        title: 'Total duels',
        description: 'Total duels contested.',
        isPercentage: false,
        compute: (value) => value,
    },
    {
        id: 'duelsWon',
        statsId: [106],
        title: 'Duels won',
        description: 'Total duels won.',
        isPercentage: false,
        compute: (value) => value,
    },
    {
        id: 'aerialsWon',
        statsId: [107],
        title: 'Aerial duels won',
        description: 'Total aerial duels won.',
        isPercentage: false,
        compute: (value) => value,
    },

    // ========================
    // DISCIPLINE
    // ========================
    {
        id: 'foulsCommitted',
        statsId: [56],
        title: 'Fouls committed',
        description: 'Total fouls made.',
        isPercentage: false,
        compute: (value) => value,
    },
    {
        id: 'yellowCards',
        statsId: [84],
        title: 'Yellow cards',
        description: 'Total yellow cards.',
        isPercentage: false,
        compute: (value) => value,
    },
    {
        id: 'redCards',
        statsId: [83],
        title: 'Red cards',
        description: 'Total red cards.',
        isPercentage: false,
        compute: (value) => value,
    },
];
