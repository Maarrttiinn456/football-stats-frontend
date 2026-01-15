import type { ColumnDef } from '@tanstack/react-table';
import type { TeamWithStatistics } from '../../types';
import { getStatValue } from '../../utils/getStatValue';
import type {
    InterceptionValue,
    TacklesValue,
} from '@/shared/types/entities/statistics.values';

export const columnDefDefending: ColumnDef<TeamWithStatistics>[] = [
    {
        id: 'rank',
        header: '#',
        enableSorting: false,
    },
    {
        header: 'Team',
        cell: ({ row }) => {
            const { short_code, image_path } = row.original;

            return (
                <div className="flex gap-x-3 items-center">
                    <img
                        className="w-5 object-contain"
                        src={image_path}
                        alt={short_code}
                    />
                    <div>{short_code}</div>
                </div>
            );
        },
    },

    {
        id: 'totalTackles', //sorting
        header: 'Total Tackles',
        accessorFn: (row) => {
            const tackles = getStatValue<TacklesValue>(row.statistics, 78);
            return tackles?.count ?? '-';
        },
    },
    {
        header: 'Tackles per Foul',
        accessorFn: (row) => {
            const tackles = getStatValue<TacklesValue>(row.statistics, 78);
            return tackles?.tackles_per_foul ?? '-';
        },
    },
    {
        header: 'Tackles per Card',
        accessorFn: (row) => {
            const tackles = getStatValue<TacklesValue>(row.statistics, 78);
            return tackles?.tackles_per_card ?? '-';
        },
    },
    {
        header: 'Total Interceptions',
        accessorFn: (row) => {
            const inter = getStatValue<InterceptionValue>(
                row.statistics,
                27252
            );
            return inter?.total_interceptions ?? '-';
        },
    },
    {
        header: 'Interceptions per Match',
        accessorFn: (row) => {
            const inter = getStatValue<InterceptionValue>(
                row.statistics,
                27252
            );
            return inter?.interceptions_per_game ?? '-';
        },
    },
];
