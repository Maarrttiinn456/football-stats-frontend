import type { TopScorersPlayer } from '@/features/player-stats/types';
import { FootballClient } from '@/shared/api/football/client';

export const fetchTopscorersBySeasonsAndTypeId = (
    seasonId: number,
    eventTypeId: number
) => {
    return FootballClient<TopScorersPlayer>({
        url: `/seasons/${seasonId}/topscorers`,
        params: {
            eventType: eventTypeId,
        },
    });
};
