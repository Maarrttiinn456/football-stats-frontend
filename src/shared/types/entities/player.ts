import type { Nationality } from './nationality';
import type { Position } from './position';

export type Player = {
    id: number;
    country_id: number;
    sport_id: number;
    city_id: number;
    position_id: number;
    nationality_id: number;
    common_name: string | null;
    firstname: string | null;
    lastname: string | null;
    name: string;
    display_name: string;
    image_path: string;

    nationality?: Nationality;
    position?: Position;
};
