import { fetchSeasonsByLeagueId } from '@/api/football/leagues';
import { useQuery } from '@tanstack/react-query';

const useGetAllSeasonsByLeague = (leagueId?: number) => {
    return useQuery({
        queryKey: ['allSeasonsByLeagueId', leagueId],
        queryFn: () => fetchSeasonsByLeagueId(leagueId!),
        enabled: !!leagueId,
        select: (response) => response.data,
    });
};

export default useGetAllSeasonsByLeague;
