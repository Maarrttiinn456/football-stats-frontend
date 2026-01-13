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
import { columnDefShot } from './teamColumnsShot';

type TeamStatsShotsCardProps = {
    data: TeamWithStatistics[];
};

const TeamStatsShotsCard = ({ data }: TeamStatsShotsCardProps) => {
    const [sorting, setSorting] = useState<SortingState>([
        { id: 'totalShots', desc: true },
    ]);

    // eslint-disable-next-line react-hooks/incompatible-library
    const table = useReactTable({
        data: data,
        columns: columnDefShot,
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
                    <div className="min-w-max">
                        <DataTable table={table} isSorting={true} />
                    </div>
                </div>
            </CardBase.Content>
        </CardBase>
    );
};

export default TeamStatsShotsCard;
