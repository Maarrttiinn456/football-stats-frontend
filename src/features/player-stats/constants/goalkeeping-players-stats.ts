export const GOALKEEPING_PLAYERS_STATS = [
    // Core goalkeeper output
    { eventId: 57, title: 'Saves', positions: ['goalkeeper'] },
    { eventId: 88, title: 'Goals Conceded', positions: ['goalkeeper'] },

    // Save quality
    { eventId: 104, title: 'Saves Inside Box', positions: ['goalkeeper'] },
    { eventId: 105, title: 'Saves Outside Box', positions: ['goalkeeper'] },

    // Errors / mistakes
    {
        eventId: 571,
        title: 'Errors Leading to Goal',
        positions: ['goalkeeper'],
    },

    // Distribution (modern GK)
    { eventId: 80, title: 'Passes', positions: ['goalkeeper'] },
    { eventId: 116, title: 'Accurate Passes', positions: ['goalkeeper'] },
];
