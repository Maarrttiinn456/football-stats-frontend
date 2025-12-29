import type { LeagueResponse } from '@/types/leagues';
import { FootballClient } from './client';

export const fetchAllLeagues = () => {
    return FootballClient<LeagueResponse>({
        url: '/leagues',
    });
};
