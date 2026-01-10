import { useParams } from 'react-router';
import useGetLeaderboards from '../queries/useGetLeaderboards';
import { SpinnerCustom } from '@/shared/ui/spinner';
import LeaderboardsStatsCard from '../components/LeaderboardsStatsCard';
import CardSpacing from '@/shared/layouts/CardSpacing';
import { getSpecificStat } from '../utils/getSpecificStats';
import { DEFENDING_STATS } from '../constants/defending-players-stats';

const DefendingPage = () => {
    const { seasonId } = useParams();
    const seasonIdNumber = seasonId ? Number(seasonId) : undefined;

    const statsToFetch = [
        321, //odehrane zapasy
        ...new Set(DEFENDING_STATS.map((stat) => stat.statsId).flat()),
    ];

    const { data: defending, isLoading } = useGetLeaderboards(
        seasonIdNumber,
        statsToFetch
    );

    if (isLoading) {
        return <SpinnerCustom />;
    }

    return (
        <CardSpacing>
            {defending &&
                DEFENDING_STATS.map((stat) => {
                    return (
                        <LeaderboardsStatsCard
                            key={stat.id}
                            title={stat.title}
                            description={stat.description}
                            tableData={getSpecificStat(defending, stat)}
                        />
                    );
                })}
        </CardSpacing>
    );
};

export default DefendingPage;
