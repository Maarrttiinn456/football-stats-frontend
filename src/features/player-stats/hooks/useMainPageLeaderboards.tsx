import { useQueries } from '@tanstack/react-query';
import { fetchLeaderboardsBasedOnEventType } from '../api/leaderboards';
import type { PlayerStats } from '../types';

const STAT = {
    GOALS: 52,
    ASSISTS: 79,
    BIG_CHANCES_CREATED: 580,
    PENALTIES: 47,
} as const;

const getTotal = (p: PlayerStats, typeId: number) =>
    p.details?.find((d) => d.type_id === typeId)?.value?.total ?? 0;

const sortByStat = (players: PlayerStats[], typeId: number) =>
    [...players].sort((a, b) => getTotal(b, typeId) - getTotal(a, typeId));

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
                            STAT.GOALS,
                            STAT.ASSISTS,
                            STAT.BIG_CHANCES_CREATED,
                            STAT.PENALTIES,
                        ]
                    );

                    return res.data;
                },
                enabled: !!seasonId,
                select: (data: PlayerStats[]) => {
                    // jen hráči co mají aspoň něco v details
                    const players = data.filter(
                        (p) => p.details && p.details.length > 0
                    );

                    return {
                        goals: sortByStat(players, STAT.GOALS),
                        assists: sortByStat(players, STAT.ASSISTS),
                        bigChancesCreated: sortByStat(
                            players,
                            STAT.BIG_CHANCES_CREATED
                        ),
                        penalties: sortByStat(players, STAT.PENALTIES),
                    };
                },
            },
        ],
    });

    const playersData = results[1].data;

    return {
        isLoading: results.some((q) => q.isLoading),
        isError: results.some((q) => q.isError),
        error: results.find((q) => q.error)?.error,
        data: {
            cleanSheets: results[0].data,

            goals: playersData?.goals,
            assists: playersData?.assists,
            bigChancesCreated: playersData?.bigChancesCreated,
            penalties: playersData?.penalties,
        },
    };
};
