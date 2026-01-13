import type { ApiResponse } from '@/shared/types/api';
import type { Team } from '@shared/types/entities/team';
import type { TeamDetailStats } from './team-detail-stats';

export type Statistics = {
    id: number;
    team_id: number;
    season_id: number;
    has_values: boolean;
    details: TeamDetailStats[];
};

export type TeamWithStatistics = Team & {
    statistics: Statistics[];
};

export type TeamStatsResponse = ApiResponse<TeamWithStatistics[]>;
