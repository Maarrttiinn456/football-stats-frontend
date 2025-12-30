import type { StatisticType } from '../statisticsType';

export type StandingDetail = {
    id: number;
    standing_id: number;
    type_id: number;
    value: number;
    type?: StatisticType;
};
