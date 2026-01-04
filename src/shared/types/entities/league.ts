export type League = {
    id: number;
    sport_id: number;
    country_id: number;
    name: string;
    active: boolean;
    short_code: string | null;
    image_path: string | null;
    type: string;
    sub_type: string;
    last_played_at: string | null;
    category: number;
    has_jerseys: boolean;
};
