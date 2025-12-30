import type { StandingsResponse } from '@/types/standings';
import { FootballClient } from './client';

export const fetchSeasonStandings = (seasonId: number) => {
    return FootballClient<StandingsResponse>({
        url: `/seasons/${seasonId}/standings`,
    });
};
