import type { StatisticType } from '@/shared/types/entities/statistics-type';

export type StatValueWithTotal = {
    total: number;
    [key: string]: unknown;
};

export type PlayerStatsDetail = {
    id: number;
    player_statistic_id: number;
    type_id: number;
    value: StatValueWithTotal;
    type: StatisticType;
};
