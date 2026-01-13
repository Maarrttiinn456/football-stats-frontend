import type { StatisticType } from '@/shared/types/entities/statistics-type';

export type TeamDetailStats<T = unknown> = {
    id: number;
    team_statistic_id: number;
    type_id: number;
    value: T;
    type: StatisticType;
};
