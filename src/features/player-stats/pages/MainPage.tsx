import { useParams } from 'react-router';
import { SpinnerCustom } from '@/shared/ui/spinner';
import CardSpacing from '@/shared/layouts/CardSpacing';
import { useMainPageLeaderboards } from '../hooks/useMainPageLeaderboards';
import LeaderboardsStatsCard from '../components/LeaderboardsStatsCard';
import useGetSeasonDetail from '@/shared/queries/seassons/useGetSeasonDetail';
import { useEffect } from 'react';

const MainPage = () => {
    const { seasonId } = useParams();
    const seasonIdNumber = seasonId ? Number(seasonId) : undefined;

    const { data, isError, error, isLoading } =
        useMainPageLeaderboards(seasonIdNumber);

    const { data: seasonDetail } = useGetSeasonDetail(seasonIdNumber);

    useEffect(() => {
        console.log(data);
    }, [data]);

    if (isLoading) {
        return <SpinnerCustom />;
    }

    if (isError) {
        return <div>Error: {error?.message}</div>;
    }

    return (
        <CardSpacing>
            {data.assists && (
                <LeaderboardsStatsCard
                    title="Goals"
                    description={`${seasonDetail?.league.name} ${seasonDetail?.name}`}
                    tableData={data.assists}
                />
            )}
            {data.cleanSheets && (
                <LeaderboardsStatsCard
                    title="Clean sheets"
                    description={`${seasonDetail?.league.name} ${seasonDetail?.name}`}
                    tableData={data.cleanSheets}
                />
            )}
        </CardSpacing>
    );
};

export default MainPage;
