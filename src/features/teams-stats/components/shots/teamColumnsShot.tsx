import type { ColumnDef } from '@tanstack/react-table';
import type { TeamWithStatistics } from '../../types';
import { getStatValue } from '../../utils/getStatValue';
import type {
    GoalsValue,
    ShotsValue,
} from '@/shared/types/entities/statistics.values';

export const columnDefShot: ColumnDef<TeamWithStatistics>[] = [
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
        header: 'Goals Scored',
        accessorFn: (row) => {
            const goals = getStatValue<GoalsValue>(row.statistics, 52);
            return goals?.all.count ?? '-';
        },
    },
    {
        id: 'totalShots', //sorting
        header: 'Total Shots',
        accessorFn: (row) => {
            const shots = getStatValue<ShotsValue>(row.statistics, 1677);
            return shots?.total ?? '-';
        },
    },
    {
        header: 'Shots on Target',
        accessorFn: (row) => {
            const shots = getStatValue<ShotsValue>(row.statistics, 1677);
            return shots?.on_target ?? '-';
        },
    },
    {
        id: 'shotsPerMatch',
        header: 'Shots per Match',
        accessorFn: (row) => {
            const shots = getStatValue<ShotsValue>(row.statistics, 1677);
            return shots?.average ?? '-';
        },
    },
    {
        id: 'shotsPerGoal',
        header: 'Shots per Goal',
        accessorFn: (row) => {
            const shots = getStatValue<ShotsValue>(row.statistics, 1677);
            const goals = getStatValue<GoalsValue>(row.statistics, 52);

            if (!shots?.total || !goals?.all.count) return null;

            return (shots.total / goals.all.count).toFixed(2);
        },
    },
];
