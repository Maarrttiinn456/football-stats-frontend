export type StandingForm = {
    id: number;
    standing_id: number;
    fixture_id: number;
    form: 'W' | 'D' | 'L';
    sort_order: number;
};
