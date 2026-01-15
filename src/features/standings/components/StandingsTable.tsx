import { useParams } from 'react-router';
import {
    getCoreRowModel,
    getSortedRowModel,
    useReactTable,
} from '@tanstack/react-table';
//Components
import useGetStansings from '@/features/standings/queries/useGetStandings';
import { SpinnerCustom } from '@/shared/ui/spinner';
import DataTable from '@/shared/components/DataTable';
import { CardBase } from '@/shared/components/CardBase';
//Types
import type {
    StandingsTableRowBase,
    StandingsTableRowExtended,
} from '../types';
import getBaseStandingsColumns from './baseStandingColumns';
import getExtendedStandingsColumns from './extendStandingsColumns';

type VariantStandingsProps = {
    variant: 'base' | 'extend';
};

const StandingsTable = ({ variant }: VariantStandingsProps) => {
    const { seasonId } = useParams();
    const seasonIdNumber = seasonId ? Number(seasonId) : undefined;

    const {
        data: standings,
        isLoading,
        isError,
        error,
    } = useGetStansings(seasonIdNumber);

    // eslint-disable-next-line react-hooks/incompatible-library
    const baseTable = useReactTable<StandingsTableRowBase>({
        data: standings?.base ?? [],
        columns: getBaseStandingsColumns(seasonId),
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
    });

    // eslint-disable-next-line react-hooks/incompatible-library
    const extendedTable = useReactTable<StandingsTableRowExtended>({
        data: standings?.extended ?? [],
        columns: getExtendedStandingsColumns(seasonId),
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
    });

    if (isLoading) return <SpinnerCustom />;
    if (isError) return <div>Error: {error.message}</div>;

    return (
        <CardBase>
            <CardBase.Content>
                {variant === 'base' ? (
                    <DataTable table={baseTable} />
                ) : (
                    <DataTable table={extendedTable} />
                )}
            </CardBase.Content>
        </CardBase>
    );
};

export default StandingsTable;
