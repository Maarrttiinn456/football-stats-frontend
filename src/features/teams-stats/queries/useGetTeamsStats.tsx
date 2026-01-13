import { useQuery } from '@tanstack/react-query';
import { fetchSeasonTeamsStats } from '../api/seasonTeamsStats';

const useGetTeamsStats = (seasonId?: number, eventTypes?: number[]) => {
    return useQuery({
        queryKey: ['teamsStats', seasonId, eventTypes],
        queryFn: () => fetchSeasonTeamsStats(seasonId!, eventTypes!),
        enabled: !!seasonId && !!eventTypes,
        select: (response) => response.data,
    });
};

export default useGetTeamsStats;
