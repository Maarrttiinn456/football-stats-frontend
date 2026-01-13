import { SpinnerCustom } from '@/shared/ui/spinner';
import useGetTeamsStats from '../queries/useGetTeamsStats';
import { useParams } from 'react-router';
import { TEAM_SHOTS_STATS } from '../constatnts/shots-teams-stats';
import TeamStatsShotsCard from '../components/shots/TeamStatsShotsCard';

const ShotsPage = () => {
    const { seasonId } = useParams();
    const seasonIdNumber = seasonId ? Number(seasonId) : undefined;

    const statsToFetch = Object.values(TEAM_SHOTS_STATS);

    //console.log(statsToFetch);

    const { data: shotsData, isLoading } = useGetTeamsStats(
        seasonIdNumber,
        statsToFetch
    );

    if (isLoading) {
        return <SpinnerCustom />;
    }

    return <TeamStatsShotsCard data={shotsData ?? []} />;
};

export default ShotsPage;
