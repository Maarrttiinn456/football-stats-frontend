import { useQuery } from '@tanstack/react-query';
import { fetchLeaderboardsBasedOnEventType } from '../api/leaderboards';

const useGetLeaderboards = (
    seasonId?: number,
    eventsType?: number[],
    playerPosition?: string[]
) => {
    return useQuery({
        queryKey: [
            'leaderboards',
            seasonId,
            eventsType,
            playerPosition ?? 'all',
        ],
        queryFn: () =>
            fetchLeaderboardsBasedOnEventType(
                seasonId!,
                eventsType!,
                playerPosition
            ),
        enabled: !!seasonId && !!eventsType,
        select: (response) => {
            const hasvalue = response.data.filter(
                (player) => player.details.length > 0
            );

            return hasvalue;
        },
    });
};

export default useGetLeaderboards;
