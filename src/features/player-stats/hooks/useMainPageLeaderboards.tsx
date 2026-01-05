import { useQueries } from '@tanstack/react-query';
import { fetchLeaderboardsBasedOnEventType } from '../api/leaderboards';
import type { PlayerStats } from '../types';
import { MAIN_PLAYERS_STATS } from '../constants/main-players-stats';

export const useMainPageLeaderboards = (seasonId?: number) => {
    const results = useQueries({
        queries: [
            {
                queryKey: ['leaderboards', seasonId, 'goalkeepers'],
                queryFn: async () => {
                    const res = await fetchLeaderboardsBasedOnEventType(
                        seasonId!,
                        [194],
                        ['goalkeeper']
                    );
                    return res.data;
                },
                enabled: !!seasonId,
                select: (data: PlayerStats[]) => {
                    const withStats = data.filter(
                        (player) => player.details && player.details.length > 0
                    );

                    return [...withStats].sort((a, b) => {
                        const aValue = a.details[0]?.value?.total ?? 0;
                        const bValue = b.details[0]?.value?.total ?? 0;
                        return bValue - aValue;
                    });
                },
            },

            {
                queryKey: ['leaderboards', seasonId, 'players'],
                queryFn: async () => {
                    const res = await fetchLeaderboardsBasedOnEventType(
                        seasonId!,
                        [
                            MAIN_PLAYERS_STATS.GOALS,
                            MAIN_PLAYERS_STATS.ASSISTS,
                            MAIN_PLAYERS_STATS.BIG_CHANCES_CREATED,
                            MAIN_PLAYERS_STATS.PENALTIES,
                        ]
                    );

                    return res.data;
                },
                enabled: !!seasonId,
                select: (data: PlayerStats[]) => {
                    // jen hráči co mají aspoň něco v details
                    const withStats = data.filter(
                        (player) => player.details && player.details.length > 0
                    );

                    return {};
                },
            },
        ],
    });

    return {
        isLoading: results.some((q) => q.isLoading),
        isError: results.some((q) => q.isError),
        error: results.find((q) => q.error)?.error,
        data: {
            cleanSheets: results[0].data,
        },
    };
};
