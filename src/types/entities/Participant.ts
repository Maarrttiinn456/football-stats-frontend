export type Participant = {
    id: number;
    sport_id: number;
    country_id: number | null;
    venue_id: number | null;
    gender: 'male' | 'female' | 'mixed';
    name: string;
    short_code: string | null;
    image_path: string;
    founded: number | null;
    type: 'domestic' | 'national' | string;
    placeholder: boolean;
    last_played_at: string | null;
    meta: ParticipantMeta;
};

export type ParticipantMeta = {
    location: 'home' | 'away';
    winner: boolean;
    position: number;
};
