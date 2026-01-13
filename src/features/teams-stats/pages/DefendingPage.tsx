import { SpinnerCustom } from '@/shared/ui/spinner';
import useGetTeamsStats from '../queries/useGetTeamsStats';
import { useParams } from 'react-router';
import { TEAM_DEFENDING_STATS } from '../constatnts/defending-teams-stats';
import TeamStatsDefendingCard from '../components/defending/TeamStatsDefendingCard';

const DefendingPage = () => {
    const { seasonId } = useParams();
    const seasonIdNumber = seasonId ? Number(seasonId) : undefined;

    const statsToFetch = Object.values(TEAM_DEFENDING_STATS);

    //console.log(statsToFetch);

    const { data: shotsData, isLoading } = useGetTeamsStats(
        seasonIdNumber,
        statsToFetch
    );

    if (isLoading) {
        return <SpinnerCustom />;
    }

    return <TeamStatsDefendingCard data={shotsData ?? []} />;
};

export default DefendingPage;
