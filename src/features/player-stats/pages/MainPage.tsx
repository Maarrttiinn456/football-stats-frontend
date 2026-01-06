import { useParams } from 'react-router';
import { SpinnerCustom } from '@/shared/ui/spinner';
import CardSpacing from '@/shared/layouts/CardSpacing';
import LeaderboardsStatsCard from '../components/LeaderboardsStatsCard';
import { MAIN_PLAYERS_STATS } from '../constants/main-players-stats';
import useGetLeaderboards from '../queries/useGetLeaderboards';
import { getSpecificStats } from '../utils/getSpecificStats';
import useGetSeasonDetail from '@/shared/queries/seassons/useGetSeasonDetail';

const MainPage = () => {
    const { seasonId } = useParams();
    const seasonIdNumber = seasonId ? Number(seasonId) : undefined;

    const mainPlayerStats = MAIN_PLAYERS_STATS.map((stat) => stat.eventId);

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
                MAIN_PLAYERS_STATS.map((stat) => (
                    <LeaderboardsStatsCard
                        key={stat.eventId}
                        title={stat.title}
                        description={`${seassonDetail?.league.name} - ${seassonDetail?.name} `}
                        tableData={getSpecificStats(
                            playersStats,
                            MAIN_PLAYERS_STATS,
                            stat.eventId
                        )}
                    />
                ))}
        </CardSpacing>
    );
};

export default MainPage;
