import type { StatConfig } from '../types/player-stat-config';

export const GOALKEEPING_STATS: StatConfig[] = [
    {
        id: 'cleanSheets',
        statsId: [194],
        title: 'Clean sheets',
        description:
            'Number of matches in which the goalkeeper conceded no goals.',
        isPercentage: false,
        compute: (cleanSheets) => cleanSheets,
    },

    {
        id: 'cleanSheetPercentage',
        statsId: [194, 321],
        title: 'Clean sheet %',
        description:
            'Percentage of matches in which the goalkeeper kept a clean sheet (no goals conceded).',
        isPercentage: true,
        compute: (cleanSheets, starts = 0) =>
            starts > 0 ? (cleanSheets / starts) * 100 : 0,
    },

    {
        id: 'saves',
        statsId: [57],
        title: 'Saves',
        description: 'Total number of shots on target saved by the goalkeeper.',
        isPercentage: false,
        compute: (saves) => saves,
    },

    {
        id: 'savePercentage',
        statsId: [57, 88],
        title: 'Save %',
        description:
            'Percentage of shots on target that were saved by the goalkeeper.',
        isPercentage: true,
        compute: (saves, goals = 0) =>
            saves + goals > 0 ? (saves / (saves + goals)) * 100 : 0,
    },
    {
        id: 'savesPer90',
        statsId: [57, 119],
        title: 'Saves / 90',
        description: 'Average number of saves made per 90 minutes played.',
        isPercentage: false,
        compute: (saves, minutes = 0) =>
            minutes > 0 ? (saves / minutes) * 90 : 0,
    },

    {
        id: 'errorsLeadingToGoal',
        statsId: [571],
        title: 'Errors leading to goal',
        description:
            'Number of goalkeeper errors that directly resulted in conceding a goal.',
        isPercentage: false,
        compute: (errors) => errors,
    },

    {
        id: 'goalsConceded',
        statsId: [88],
        title: 'Goals conceded',
        description:
            'Total number of goals conceded while the goalkeeper was on the pitch.',
        isPercentage: false,
        compute: (goals) => goals,
    },

    {
        id: 'goalsConcededPer90',
        statsId: [88, 119],
        title: 'Goals conceded / 90',
        description: 'Average number of goals conceded per 90 minutes played.',
        isPercentage: false,
        compute: (goals, minutes = 0) =>
            minutes > 0 ? (goals / minutes) * 90 : 0,
    },

    {
        id: 'passes',
        statsId: [80],
        title: 'Passes',
        description: 'Total number of passes attempted by the goalkeeper.',
        isPercentage: false,
        compute: (passes) => passes,
    },

    {
        id: 'passAccuracy',
        statsId: [80, 116],
        title: 'Pass accuracy %',
        description:
            'Percentage of passes successfully completed by the goalkeeper.',
        isPercentage: true,
        compute: (passes, accurate = 0) =>
            passes > 0 ? (accurate / passes) * 100 : 0,
    },
];
