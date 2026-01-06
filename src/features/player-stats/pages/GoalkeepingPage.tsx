import { useParams } from 'react-router';
import useGetLeaderboards from '../queries/useGetLeaderboards';
import { SpinnerCustom } from '@/shared/ui/spinner';
import CardSpacing from '@/shared/layouts/CardSpacing';
import LeaderboardsStatsCard from '../components/LeaderboardsStatsCard';
import { getSpecificStats } from '../utils/getSpecificStats';
import useGetSeasonDetail from '@/shared/queries/seassons/useGetSeasonDetail';
import { GOALKEEPING_PLAYERS_STATS } from '../constants/goalkeeping-players-stats';

const GoalkeepingPage = () => {
    const { seasonId } = useParams();
    const seasonIdNumber = seasonId ? Number(seasonId) : undefined;

    const mainPlayerStats = GOALKEEPING_PLAYERS_STATS.map(
        (stat) => stat.eventId
    );

    const { data: playersStats, isLoading } = useGetLeaderboards(
        seasonIdNumber,
        mainPlayerStats
    );

    const { data: seassonDetail } = useGetSeasonDetail(seasonIdNumber);

    if (isLoading) {
        return <SpinnerCustom />;
    }

    return (
        <CardSpacing>
            {playersStats &&
                GOALKEEPING_PLAYERS_STATS.map((stat) => (
                    <LeaderboardsStatsCard
                        key={stat.eventId}
                        title={stat.title}
                        description={`${seassonDetail?.league.name} - ${seassonDetail?.name} `}
                        tableData={getSpecificStats(
                            playersStats,
                            GOALKEEPING_PLAYERS_STATS,
                            stat.eventId
                        )}
                    />
                ))}
        </CardSpacing>
    );
};

export default GoalkeepingPage;
