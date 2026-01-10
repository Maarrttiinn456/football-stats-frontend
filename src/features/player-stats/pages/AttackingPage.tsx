import { useParams } from 'react-router';
import useGetLeaderboards from '../queries/useGetLeaderboards';
import { SpinnerCustom } from '@/shared/ui/spinner';
import LeaderboardsStatsCard from '../components/LeaderboardsStatsCard';
import CardSpacing from '@/shared/layouts/CardSpacing';
import { getSpecificStat } from '../utils/getSpecificStats';
import { ATTACKING_STATS } from '../constants/attacking-players-stats';

const AttackingPage = () => {
    const { seasonId } = useParams();
    const seasonIdNumber = seasonId ? Number(seasonId) : undefined;

    const statsToFetch = [
        321, //odehrane zapasy
        ...new Set(ATTACKING_STATS.map((stat) => stat.statsId).flat()),
    ];

    const { data: attack, isLoading } = useGetLeaderboards(
        seasonIdNumber,
        statsToFetch
    );

    if (isLoading) {
        return <SpinnerCustom />;
    }

    return (
        <CardSpacing>
            {attack &&
                ATTACKING_STATS.map((stat) => {
                    return (
                        <LeaderboardsStatsCard
                            key={stat.id}
                            title={stat.title}
                            description={stat.description}
                            tableData={getSpecificStat(attack, stat)}
                        />
                    );
                })}
        </CardSpacing>
    );
};

export default AttackingPage;
