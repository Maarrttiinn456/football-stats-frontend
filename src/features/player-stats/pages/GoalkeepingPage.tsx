import { useParams } from 'react-router';
import useGetLeaderboards from '../queries/useGetLeaderboards';
import { SpinnerCustom } from '@/shared/ui/spinner';
import { GOALKEEPING_STATS } from '../constants/goalkeeping-players-stats';
import LeaderboardsStatsCard from '../components/LeaderboardsStatsCard';
import CardSpacing from '@/shared/layouts/CardSpacing';
import { getSpecificStat } from '../utils/getSpecificStats';

const GoalkeepingPage = () => {
    const { seasonId } = useParams();
    const seasonIdNumber = seasonId ? Number(seasonId) : undefined;

    const statsToFetch = [
        321, //odehrane zapasy
        ...new Set(GOALKEEPING_STATS.map((stat) => stat.statsId).flat()),
    ];

    const { data: gks, isLoading } = useGetLeaderboards(
        seasonIdNumber,
        statsToFetch,
        ['goalkeeper']
    );

    if (isLoading) {
        return <SpinnerCustom />;
    }

    return (
        <CardSpacing>
            {gks &&
                GOALKEEPING_STATS.map((stat) => {
                    return (
                        <LeaderboardsStatsCard
                            key={stat.id}
                            title={stat.title}
                            description={stat.description}
                            tableData={getSpecificStat(gks, stat)}
                        />
                    );
                })}
        </CardSpacing>
    );
};

export default GoalkeepingPage;
