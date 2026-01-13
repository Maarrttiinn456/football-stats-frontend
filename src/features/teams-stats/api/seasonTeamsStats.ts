import { FootballClient } from '@/shared/api/football/client';
import type { TeamStatsResponse } from '../types';

export const fetchSeasonTeamsStats = (
    seasonId: number,
    eventTypes: number[]
) => {
    return FootballClient<TeamStatsResponse>({
        url: `/seasons/${seasonId}/teams/stats`,
        params: {
            ...(eventTypes.length ? { typeIds: eventTypes.join(',') } : {}),
        },
    });
};
