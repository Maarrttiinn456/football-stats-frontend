import type { TeamWithStatistics } from '../types';

export const getStatValue = <T>(
    statistics: TeamWithStatistics['statistics'],
    typeId: number
): T | undefined => {
    return statistics
        .flatMap((stat) => stat.details)
        .find((detail) => detail.type_id === typeId)?.value as T | undefined;
};
