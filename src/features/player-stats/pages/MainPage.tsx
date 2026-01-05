import { useParams } from 'react-router';
import { useEffect, useMemo } from 'react';
import { SpinnerCustom } from '@/shared/ui/spinner';
import CardSpacing from '@/shared/layouts/CardSpacing';
import LeaderboardsStatsCard from '../components/LeaderboardsStatsCard';
import { MAIN_PLAYERS_STATS } from '../constants/main-players-stats';
import useGetLeaderboards from '../queries/useGetLeaderboards';

const MainPage = () => {
    const { seasonId } = useParams();
    const seasonIdNumber = seasonId ? Number(seasonId) : undefined;

    const mainPlayerStats = MAIN_PLAYERS_STATS.map((stat) => stat.eventId);

    const { data, isLoading } = useGetLeaderboards(
        seasonIdNumber,
        mainPlayerStats
    );

    const getSpecificStat = useMemo(() => {
        return (eventType: number) => {
            const statConfig = MAIN_PLAYERS_STATS.find(
                (s) => s.eventId === eventType
            );

            return (
                data
                    ?.filter((row) => {
                        if (statConfig?.positions?.length) {
                            const code = row.player?.position?.code;
                            return code && statConfig.positions.includes(code);
                        }

                        return true;
                    })
                    .map((row) => ({
                        ...row,
                        details: row.details.filter(
                            (d) => d.type_id === eventType
                        ),
                    })) ?? []
            ).sort((a, b) => {
                const aTotal = a.details[0]?.value?.total ?? 0;
                const bTotal = b.details[0]?.value?.total ?? 0;
                return bTotal - aTotal;
            });
        };
    }, [data]);

    useEffect(() => {
        console.log(data);
    }, [data]);

    if (isLoading) {
        return <SpinnerCustom />;
    }

    return (
        <CardSpacing>
            {data &&
                MAIN_PLAYERS_STATS.map((stat) => (
                    <LeaderboardsStatsCard
                        key={stat.eventId}
                        title={stat.title}
                        description="dsdsd"
                        tableData={getSpecificStat(stat.eventId)}
                    />
                ))}
        </CardSpacing>
    );
};

export default MainPage;
