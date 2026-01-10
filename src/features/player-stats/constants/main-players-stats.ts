import type { StatConfig } from '../types/player-stat-config';

export const MAIN_STATS: StatConfig[] = [
    {
        id: 'rating',
        statsId: [118],
        title: 'Rating',
        description: 'Average player rating.',
        isPercentage: false,
        compute: (value) => value,
    },
    {
        id: 'goals',
        statsId: [52],
        title: 'Goals',
        description: 'Total goals scored.',
        isPercentage: false,
        compute: (value) => value,
    },
    {
        id: 'assists',
        statsId: [79],
        title: 'Assists',
        description: 'Total assists.',
        isPercentage: false,
        compute: (value) => value,
    },
    {
        id: 'penalties',
        statsId: [47],
        title: 'Penalties',
        description: 'Number of penalties taken.',
        isPercentage: false,
        compute: (value) => value,
    },
    {
        id: 'bigChancesCreated',
        statsId: [580],
        title: 'Big chances created',
        description: 'Total big chances created.',
        isPercentage: false,
        compute: (value) => value,
    },
];
