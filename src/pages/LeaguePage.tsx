import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import useGetAllSeasonsByLeague from '@/queries/useGetAllSeasonsByLeague';
import SeasonSelect from '@/components/SeasonSelect';
import { SpinnerCustom } from '@/components/ui/spinner';
import LeagueTabs from '@/components/league/LeagueTabs';

const LeaguePage = () => {
    const { leagueId, seasonId } = useParams();
    const leagueIdNumber = leagueId ? Number(leagueId) : undefined;
    const seasonIdNumber = seasonId ? Number(seasonId) : undefined;

    const [currentSeasonId, setCurrentSeasonId] = useState(seasonIdNumber);

    const {
        data: leagueWithSeasons,
        isLoading,
        isError,
        error,
    } = useGetAllSeasonsByLeague(leagueIdNumber);

    const topSeasonsSorted = leagueWithSeasons?.seasons
        .slice()
        .sort(
            (a, b) =>
                new Date(b.starting_at).getTime() -
                new Date(a.starting_at).getTime()
        )
        .slice(0, 4);

    const handleChangeSeason = (value: number) => {
        setCurrentSeasonId(value);
    };

    useEffect(() => {
        console.log(leagueWithSeasons);
    }, [leagueWithSeasons]);

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

    //const [currentSeasonId, setCurrentSeasonId] = useState(seasonId);

    //prectu currentseasson id a na zaklade toho zobazim vsechna data
    //Na zaklade league Id najdu vsechny sezony a ty dam do input selectu
    //Na zaklade current league ID budu volat tabulku, strelce atd
    //seasinID bude muset být uložen v useState

    return (
        <div>
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
                            placeholder={
                                leagueWithSeasons?.currentseason?.name ||
                                'Vyber sezónu'
                            }
                        />
                    )}
                </div>
            </div>

            <div className="mt-10">
                <LeagueTabs />
            </div>
        </div>
    );
};

export default LeaguePage;
