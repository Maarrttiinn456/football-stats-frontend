import type { ApiResponse } from '../api';
import type { League } from '../entities/league';
import type { Season } from '../entities/season';

export type SeasonDetail = Season & {
    league: League;
};

export type SeasonDetailResponse = ApiResponse<SeasonDetail>;
