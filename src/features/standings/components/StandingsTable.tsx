import { useParams } from 'react-router';
import {
    getCoreRowModel,
    getSortedRowModel,
    useReactTable,
} from '@tanstack/react-table';

import useGetStansings from '@/features/standings/queries/useGetStandings';
import { getStandingsColumns } from './standingsColumn';
import { SpinnerCustom } from '@/shared/ui/spinner';
import { TableRuleClass } from '../utils/standingsRuleStyles';
import DataTable from '@/shared/components/DataTable';
import { CardBase } from '@/shared/components/CardBase';

import type {
    StandingsTableRowBase,
    StandingsTableRowExtended,
} from '../types';

type StandingsVariant = 'base' | 'extended';
type Props = { variant: StandingsVariant };

const StandingsTable = ({ variant }: Props) => {
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
        columns: getStandingsColumns('base'),
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
    });

    // eslint-disable-next-line react-hooks/incompatible-library
    const extendedTable = useReactTable<StandingsTableRowExtended>({
        data: standings?.extended ?? [],
        columns: getStandingsColumns('extended'),
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
    });

    const tableRules = Object.entries(TableRuleClass).map(
        ([ruleName, bgClass]) => (
            <div key={ruleName} className="flex items-center gap-2">
                <span className={`w-3 h-3 rounded-sm ${bgClass}`} />
                <span className="text-sm">{ruleName}</span>
            </div>
        )
    );

    if (isLoading) return <SpinnerCustom />;
    if (isError) return <div>Error: {error.message}</div>;

    return (
        <CardBase>
            <CardBase.Content>
                {variant === 'base' ? (
                    <DataTable table={baseTable} caption={tableRules} />
                ) : (
                    <DataTable table={extendedTable} caption={tableRules} />
                )}
            </CardBase.Content>
        </CardBase>
    );
};

export default StandingsTable;
