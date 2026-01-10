import type { StatConfig } from '../types/player-stat-config';

export const ATTACKING_STATS: StatConfig[] = [
    // ========================
    // SHOOTING
    // ========================
    {
        id: 'shotsTotal',
        statsId: [42],
        title: 'Shots',
        description: 'Total shots attempted.',
        isPercentage: false,
        compute: (shots) => shots,
    },

    {
        id: 'hitWoodwork',
        statsId: [64],
        title: 'Hit woodwork',
        description: 'Shots that hit the woodwork.',
        isPercentage: false,
        compute: (value) => value,
    },

    // ========================
    // PASSING / CREATIVITY
    // ========================

    {
        id: 'bigChancesCreated',
        statsId: [580],
        title: 'Big chances created',
        description: 'Total big chances created.',
        isPercentage: false,
        compute: (bigChances) => bigChances,
    },
    {
        id: 'passes',
        statsId: [80],
        title: 'Passes',
        description: 'Total passes attempted.',
        isPercentage: false,
        compute: (passes) => passes,
    },
    {
        id: 'accuratePasses',
        statsId: [116],
        title: 'Accurate passes',
        description: 'Successfully completed passes.',
        isPercentage: false,
        compute: (accuratePasses) => accuratePasses,
    },

    // ========================
    // DRIBBLING
    // ========================

    {
        id: 'dribbleAttempts',
        statsId: [108],
        title: 'Dribble attempts',
        description: 'Total dribble attempts.',
        isPercentage: false,
        compute: (attempts) => attempts,
    },
    {
        id: 'successfulDribbles',
        statsId: [109],
        title: 'Successful dribbles',
        description: 'Successful dribbles.',
        isPercentage: false,
        compute: (successful) => successful,
    },
];
