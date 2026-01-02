import { Outlet, useNavigate, useParams } from 'react-router';
import useGetAllSeasonsByLeague from '@/features/league/queries/useGetAllSeasonsByLeague';
import SeasonSelect from '@/shared/components/SeasonSelect';
import { SpinnerCustom } from '@/shared/ui/spinner';
import RouteTabs from '@/shared/components/RouteTabs';

const LeaguePage = () => {
    const { leagueId, seasonId } = useParams();
    const navigate = useNavigate();
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
        .slice(0, 1000);

    const handleChangeSeason = (value: number) => {
        navigate(`/league/${leagueIdNumber}/${value}`);
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
            <div className="flex justify-between items-end">
                <div className="flex items-center gap-x-4">
                    <img
                        className="w-14 bg-white p-1.5 rounded-md"
                        src={leagueWithSeasons?.image_path}
                        alt={leagueWithSeasons?.name}
                    />
                    <div>
                        <div className="text-lg font-semibold">
                            {leagueWithSeasons?.name}
                        </div>
                        <div className="text-sm">
                            {leagueWithSeasons?.country?.name}
                        </div>
                    </div>
                </div>
                <div>
                    {topSeasonsSorted && (
                        <SeasonSelect
                            data={topSeasonsSorted}
                            onChange={handleChangeSeason}
                            placeholder={currentSeasonName || 'Vyber sezónu'}
                        />
                    )}
                </div>
            </div>

            <div className="mt-10">
                <RouteTabs
                    items={[
                        { value: 'standings', label: 'Table', to: `standings` },
                        {
                            value: 'fixtures',
                            label: 'Fixtures',
                            to: `fixtures`,
                        },
                        {
                            value: 'player-stats',
                            label: 'Player stats',
                            to: `player-stats`,
                        },
                        {
                            value: 'team-stats',
                            label: 'Team stats',
                            to: `team-stats`,
                        },
                    ]}
                    fallbackValue="standings"
                />
                <div className="mt-6">
                    <Outlet />
                </div>
            </div>
        </>
    );
};

export default LeaguePage;
