import { useMemo, useState } from 'react';
import {
    getCoreRowModel,
    getSortedRowModel,
    useReactTable,
    type SortingState,
} from '@tanstack/react-table';
import type { PlayerStatsRow } from '../types';
import DataTable from '@/shared/components/DataTable';
import { fullPlayerColumns } from './fullPlayerColumns';

type FullLadeboardTableProps = {
    tableData: PlayerStatsRow[];
};

const FullLeaderboardTable = ({ tableData }: FullLadeboardTableProps) => {
    const [sorting, setSorting] = useState<SortingState>([
        { id: 'rawNumber', desc: true },
    ]);

    const topPlayers = useMemo(() => {
        return tableData.slice(0, 50);
    }, [tableData]);

    // eslint-disable-next-line react-hooks/incompatible-library
    const table = useReactTable({
        data: topPlayers,
        columns: fullPlayerColumns,
        state: { sorting },
        onSortingChange: setSorting,
        enableSortingRemoval: false,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
    });

    return (
        <div className="max-h-[80vh] overflow-y-scroll">
            <DataTable table={table} isSorting={true} />
        </div>
    );
};

export default FullLeaderboardTable;
