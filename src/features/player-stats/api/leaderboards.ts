import { FootballClient } from '@/shared/api/football/client';
import type { PlayerStatsLeaderBoard } from '../types';

export const fetchLeaderboardsBasedOnEventType = (
    seasonId: number,
    eventTypes: number[],
    playerPosition?: string[] | []
) => {
    return FootballClient<PlayerStatsLeaderBoard>({
        url: `seasons/${seasonId}/leaderboards`,

        params: {
            ...(eventTypes?.length ? { eventsType: eventTypes.join(',') } : {}),
            ...(playerPosition?.length
                ? { playerPosition: playerPosition.join(',') }
                : {}),
        },
    });
};
