import { fetchTopscorersBySeasonsAndTypeId } from '@/features/standings/api/topscorers';
import { useQuery } from '@tanstack/react-query';

const useGetTopscorers = (seasonId?: number, eventTyeId?: number) => {
    return useQuery({
        queryKey: ['topscorers', seasonId, eventTyeId],
        queryFn: () =>
            fetchTopscorersBySeasonsAndTypeId(seasonId!, eventTyeId!),
        enabled: !!seasonId && !!eventTyeId,
        select: (response) => response.data,
    });
};

export default useGetTopscorers;
