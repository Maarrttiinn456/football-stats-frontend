import { useParams } from 'react-router';
import useGetTeamsStats from '../queries/useGetTeamsStats';
import { SpinnerCustom } from '@/shared/ui/spinner';
import { TEAM_POSSESSION_PASSING_STATS } from '../constatnts/possession-passing-teams-stats';
import TeamStatsPossPassCard from '../components/pass/TeamStatsPossPassCard';

const PossessionPassingPage = () => {
    const { seasonId } = useParams();
    const seasonIdNumber = seasonId ? Number(seasonId) : undefined;

    const statsToFetch = Object.values(TEAM_POSSESSION_PASSING_STATS);

    const { data: possPassData, isLoading } = useGetTeamsStats(
        seasonIdNumber,
        statsToFetch
    );

    if (isLoading) {
        return <SpinnerCustom />;
    }

    return <TeamStatsPossPassCard data={possPassData ?? []} />;
};

export default PossessionPassingPage;
