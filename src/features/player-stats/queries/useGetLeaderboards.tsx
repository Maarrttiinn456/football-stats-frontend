import { useQuery } from '@tanstack/react-query';
import { fetchLeaderboardsBasedOnEventType } from '../api/leaderboards';

const useGetLeaderboards = (
    seasonId?: number,
    eventsType?: number[],
    playerPosition?: string[]
) => {
    return useQuery({
        queryKey: ['leaderboards', eventsType],
        queryFn: () =>
            fetchLeaderboardsBasedOnEventType(
                seasonId!,
                eventsType!,
                playerPosition
            ),
        enabled: !!seasonId && !!eventsType,
        select: (response) => response.data,
    });
};

export default useGetLeaderboards;
