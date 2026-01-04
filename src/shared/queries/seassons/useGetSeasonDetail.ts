import { fetchSeasonDetail } from '@/shared/api/football/seassons/fetchSeasonDetail';
import { useQuery } from '@tanstack/react-query';

const useGetSeasonDetail = (seasonId?: number) => {
    return useQuery({
        queryKey: ['seasonDetail', seasonId],
        queryFn: () => fetchSeasonDetail(seasonId!),
        enabled: !!seasonId,
        select: (res) => res.data,
    });
};

export default useGetSeasonDetail;
