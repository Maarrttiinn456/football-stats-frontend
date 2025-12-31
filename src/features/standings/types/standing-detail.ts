import type { StatisticType } from '@/shared/types/entities/statistics-type';

export type StandingDetail = {
    id: number;
    standing_id: number;
    type_id: number;
    value: number;
    type?: StatisticType;
};
