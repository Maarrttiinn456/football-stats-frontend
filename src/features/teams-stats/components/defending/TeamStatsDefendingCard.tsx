import { useState } from 'react';
import { CardBase } from '@/shared/components/CardBase';
import {
    getCoreRowModel,
    getSortedRowModel,
    useReactTable,
    type SortingState,
} from '@tanstack/react-table';
import type { TeamWithStatistics } from '../../types';
import DataTable from '@/shared/components/DataTable';
import { columnDefDefending } from './teamColumnsDefending';

type TeamStatsShotsCardProps = {
    data: TeamWithStatistics[];
};

const TeamStatsDefendingCard = ({ data }: TeamStatsShotsCardProps) => {
    const [sorting, setSorting] = useState<SortingState>([
        { id: 'totalTackles', desc: true },
    ]);

    // eslint-disable-next-line react-hooks/incompatible-library
    const table = useReactTable({
        data: data,
        columns: columnDefDefending,
        state: {
            sorting,
        },
        onSortingChange: setSorting,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
    });

    return (
        <CardBase>
            <CardBase.Header title="aa" />
            <CardBase.Content>
                <div className="overflow-x-auto">
                    <DataTable table={table} isSorting={true} />
                </div>
            </CardBase.Content>
        </CardBase>
    );
};

export default TeamStatsDefendingCard;
