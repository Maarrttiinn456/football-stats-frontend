import type { StatisticType } from '../statisticsType';

export type StandingRule = {
    id: number;
    model_type: 'stage';
    model_id: number;
    type_id: number;
    position: number;
    type?: StatisticType;
};
