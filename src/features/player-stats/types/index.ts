import type { ApiResponse } from '@/shared/types/api';
import type { Participant } from '@/shared/types/entities/participant';
import type { Player } from '@/shared/types/entities/player';
import type { PlayerStatsDetail } from './player-stats-detail';

export type PlayerStats = {
    id: number;
    player_id: number;
    team_id: number;
    season_id: number;
    has_values: boolean;
    position_id: number;
    jersey_number: number | null;

    player: Player;
    team: Participant;
    details: PlayerStatsDetail[];
};

export type PlayerStatsRow = {
    id: number;
    player_id: number;
    team_id: number;
    season_id: number;
    has_values: boolean;
    position_id: number;
    jersey_number: number | null;

    player: Player;
    team: Participant;

    gamePlayed?: number;

    rawNumber: number;
    value: string;
};

export type PlayerStatsLeaderBoard = ApiResponse<PlayerStats[]>;
