import { fetchAllLeagues } from '@/api/football/leagues';
import { useQuery } from '@tanstack/react-query';

const useGetLeagues = () => {
    return useQuery({
        queryKey: ['allLeagues'],
        queryFn: () => fetchAllLeagues(),
        select: (response) =>
            response.data.filter((league) => league.sub_type === 'domestic'),
    });
};

export default useGetLeagues;
