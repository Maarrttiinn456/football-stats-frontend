import type { ColumnDef } from '@tanstack/react-table';
import type { TeamWithStatistics } from '../../types';
import { getStatValue } from '../../utils/getStatValue';
import type {
    PassingValue,
    PossessionValue,
} from '@/shared/types/entities/statistics.values';

export const columnDefPossPass: ColumnDef<TeamWithStatistics>[] = [
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
        header: 'Ball Possession',
        accessorFn: (row) => {
            const possession = getStatValue<PossessionValue>(
                row.statistics,
                45
            );
            return possession?.average + ' %';
        },
    },
    {
        id: 'totalPasses',
        header: 'Total Passes',
        accessorFn: (row) => {
            const pass = getStatValue<PassingValue>(row.statistics, 27253);
            return pass?.total_passes.toLocaleString() ?? '-';
        },
    },
    {
        id: 'passGame',
        header: 'Passes per Match',
        accessorFn: (row) => {
            const pass = getStatValue<PassingValue>(row.statistics, 27253);
            return pass?.passes_per_game ?? '-';
        },
    },
    {
        id: 'passShot',
        header: 'Passes per Shot',
        accessorFn: (row) => {
            const pass = getStatValue<PassingValue>(row.statistics, 27253);
            return pass?.passes_per_shot ?? '-';
        },
    },
    {
        id: 'passGoal',
        header: 'Passes per Goal',
        accessorFn: (row) => {
            const pass = getStatValue<PassingValue>(row.statistics, 27253);
            return pass?.passes_per_goal ?? '-';
        },
    },
];
