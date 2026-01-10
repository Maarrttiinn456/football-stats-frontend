import { useParams } from 'react-router';
import useGetLeaderboards from '../queries/useGetLeaderboards';
import { SpinnerCustom } from '@/shared/ui/spinner';
import LeaderboardsStatsCard from '../components/LeaderboardsStatsCard';
import CardSpacing from '@/shared/layouts/CardSpacing';
import { getSpecificStat } from '../utils/getSpecificStats';
import { MAIN_STATS } from '../constants/main-players-stats';

const MainPage = () => {
    const { seasonId } = useParams();
    const seasonIdNumber = seasonId ? Number(seasonId) : undefined;

    const statsToFetch = [
        321, //odehrane zapasy
        ...new Set(MAIN_STATS.map((stat) => stat.statsId).flat()),
    ];

    const { data: main, isLoading } = useGetLeaderboards(
        seasonIdNumber,
        statsToFetch
    );

    if (isLoading) {
        return <SpinnerCustom />;
    }

    return (
        <CardSpacing>
            {main &&
                MAIN_STATS.map((stat) => {
                    return (
                        <LeaderboardsStatsCard
                            key={stat.id}
                            title={stat.title}
                            description={stat.description}
                            tableData={getSpecificStat(main, stat)}
                        />
                    );
                })}
        </CardSpacing>
    );
};

export default MainPage;
