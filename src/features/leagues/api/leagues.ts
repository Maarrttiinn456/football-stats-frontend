import { FootballClient } from '@/shared/api/football/client';
import type { LeaguesResponse, LeagueWithSeasonsResponse } from '../types';

export const fetchAllLeagues = () => {
    return FootballClient<LeaguesResponse>({
        url: '/leagues',
    });
};

export const fetchSeasonsByLeagueId = (leagueId: number) => {
    return FootballClient<LeagueWithSeasonsResponse>({
        url: `/leagues/${leagueId}`,
    });
};
