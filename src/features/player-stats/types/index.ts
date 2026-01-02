import type { ApiResponse } from '@/shared/types/api';
import type { Participant } from '@/shared/types/entities/participant';
import type { Player } from '@/shared/types/entities/player';
import type { StatisticType } from '@/shared/types/entities/statistics-type';

export type PlayerStats = {
    season_id: number;
    player_id: number;
    position: number;
    total: number;

    player: Player;
    participant: Participant;
    type: StatisticType;
};

export type TopScorersPlayer = ApiResponse<PlayerStats[]>;
