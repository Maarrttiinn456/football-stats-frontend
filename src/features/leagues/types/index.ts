import type { ApiResponse } from '@/shared/types/api';

export type Country = {
    id: number;
    continent_id: number;
    name: string;
    image_path: string;
};

export type Season = {
    id: number;
    sport_id: number;
    league_id: number;
    tie_breaker_rule_id: number | null;
    name: string;
    finished: boolean;
    pending: boolean;
    is_current: boolean;
    starting_at: string;
    ending_at: string;
    standings_recalculated_at: string | null;
    games_in_current_week: boolean;
};

export type League = {
    id: number;
    name: string;
    short_code: string;
    type: string;
    active: boolean;
    country_id: number;
    sport_id: number;
    sub_type: string;
    image_path: string;

    currentseason?: Season;
    country?: Country;
};

export type LeagueWithSeasons = League & {
    seasons: Season[];
    currentseason: Season | null;
    country: Country | null;
};

export type LeaguesResponse = ApiResponse<League[]>;
export type LeagueWithSeasonsResponse = ApiResponse<LeagueWithSeasons>;
