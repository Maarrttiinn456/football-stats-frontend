import type { StatisticType } from '@/shared/types/entities/statistics-type';

export type StandingRule = {
    id: number;
    model_type: 'stage';
    model_id: number;
    type_id: number;
    position: number;
    type?: StatisticType;
};
