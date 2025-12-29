import type {
    LeaguesResponse,
    LeagueWithSeasonsResponse,
} from '@/types/leagues';
import { FootballClient } from './client';

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
