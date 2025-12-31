import { FootballClient } from '@/shared/api/football/client';
import type { StandingsResponse } from '@/features/standings/types';

export const fetchSeasonStandings = (seasonId: number) => {
    return FootballClient<StandingsResponse>({
        url: `/seasons/${seasonId}/standings`,
    });
};
