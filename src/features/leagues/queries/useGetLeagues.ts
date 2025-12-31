import { useQuery } from '@tanstack/react-query';
import { fetchAllLeagues } from '../api/leagues';

const useGetLeagues = () => {
    return useQuery({
        queryKey: ['allLeagues'],
        queryFn: () => fetchAllLeagues(),
        select: (response) =>
            response.data.filter((league) => league.sub_type === 'domestic'),
    });
};

export default useGetLeagues;
