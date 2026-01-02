import { useParams } from 'react-router';
import useGetTopscorers from '../queries/useGetTopscorers';
import CardStatsBase from './CardStatsBase';
import { SpinnerCustom } from '@/shared/ui/spinner';
import { getCoreRowModel, useReactTable } from '@tanstack/react-table';
import DataTable from '@/shared/components/DataTable';
import { playerColumns } from './playerColumns';

const CardStatsGoals = () => {
    const { seasonId } = useParams();
    const seasonIdNumber = seasonId ? Number(seasonId) : undefined;

    const eventTypeId = 208;

    const { data, isLoading, isError, error } = useGetTopscorers(
        seasonIdNumber,
        eventTypeId
    );

    // eslint-disable-next-line react-hooks/incompatible-library
    const table = useReactTable({
        data: data ?? [],
        columns: playerColumns ?? [],
        getCoreRowModel: getCoreRowModel(),
    });

    if (isLoading) {
        return <SpinnerCustom />;
    }

    if (isError) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <CardStatsBase title="Most goals">
            <DataTable table={table} />
        </CardStatsBase>
    );
};

export default CardStatsGoals;
