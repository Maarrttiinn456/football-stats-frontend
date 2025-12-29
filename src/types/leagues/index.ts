import type { ApiResponse } from '../api';

export type Country = {
    id: number;
    continent_id: number;
    name: string;
    image_path: string;
};

export type CurrentSeason = {
    id: number;
    sport_id: number;
    league_id: number;
};

export type League = {
    id: number;
    name: string;
    short_code: string | null;
    type: string;
    active: boolean;
    country_id: number;
    sport_id: number;
    sub_type: string;
    image_path: string;
    currentseason: CurrentSeason | null;
    country: Country | null;
};

export type LeagueResponse = ApiResponse<League[]>;
