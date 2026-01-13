import { SpinnerCustom } from '@/shared/ui/spinner';
import useGetTeamsStats from '../queries/useGetTeamsStats';
import { useParams } from 'react-router';
import { TEAM_ATTACKING_STATS } from '../constatnts/attack-teams-stats';
import TeamStatsAttackCard from '../components/attack/TeamStatsAttackCard';

const AttackingPage = () => {
    const { seasonId } = useParams();
    const seasonIdNumber = seasonId ? Number(seasonId) : undefined;

    const statsToFetch = Object.values(TEAM_ATTACKING_STATS);

    //console.log(statsToFetch);

    const { data: shotsData, isLoading } = useGetTeamsStats(
        seasonIdNumber,
        statsToFetch
    );

    if (isLoading) {
        return <SpinnerCustom />;
    }

    return <TeamStatsAttackCard data={shotsData ?? []} />;
};

export default AttackingPage;
