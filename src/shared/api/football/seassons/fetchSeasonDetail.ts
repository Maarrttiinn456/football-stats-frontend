import type { SeasonDetailResponse } from '@/shared/types/seasons';
import { FootballClient } from '../client';

export const fetchSeasonDetail = (seasonId: number) => {
    return FootballClient<SeasonDetailResponse>({
        url: `/seasons/${seasonId}`,
    });
};
