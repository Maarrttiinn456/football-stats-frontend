import { useLocation, useNavigate, useParams } from 'react-router';
import useGetAllSeasonsByLeague from '@/features/league/queries/useGetAllSeasonsByLeague';
import SeasonSelect from '@/shared/components/SeasonSelect';
import { SpinnerCustom } from '@/shared/ui/spinner';
import SubHeader from '@/shared/components/SubHeader';

const LeagueHeader = () => {
    const { leagueId, seasonId } = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const leagueIdNumber = leagueId ? Number(leagueId) : undefined;
    const seasonIdNumber = seasonId ? Number(seasonId) : undefined;

    const {
        data: leagueWithSeasons,
        isLoading,
        isError,
        error,
    } = useGetAllSeasonsByLeague(leagueIdNumber);

    //Vezmu jen nejnovější xxx sezóny
    const topSeasonsSorted = leagueWithSeasons?.seasons
        .slice()
        .sort(
            (a, b) =>
                new Date(b.starting_at).getTime() -
                new Date(a.starting_at).getTime()
        )
        .slice(0, 4);

    const handleChangeSeason = (value: number) => {
        const parts = location.pathname.split('/');
        const restUrl = parts.slice(4).join('/');
        console.log(restUrl);

        navigate(`/league/${leagueIdNumber}/${value}/${restUrl}`);
    };

    //Získání názvu aktuální sezóny a vložení do selectu
    const currentSeasonName = leagueWithSeasons?.seasons.find(
        (season) => season.id === seasonIdNumber
    )?.name;

    if (isLoading) {
        return (
            <div>
                <SpinnerCustom />
            </div>
        );
    }

    if (isError) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <>
            {leagueWithSeasons && (
                <SubHeader
                    title={leagueWithSeasons?.name}
                    image={leagueWithSeasons?.image_path}
                    subtitle={leagueWithSeasons?.country?.name}
                >
                    {topSeasonsSorted && (
                        <SeasonSelect
                            data={topSeasonsSorted}
                            onChange={handleChangeSeason}
                            placeholder={currentSeasonName || 'Vyber sezónu'}
                        />
                    )}
                </SubHeader>
            )}
        </>
    );
};

export default LeagueHeader;
