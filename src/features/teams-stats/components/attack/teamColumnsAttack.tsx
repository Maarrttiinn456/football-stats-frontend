import type { ColumnDef } from '@tanstack/react-table';
import type { TeamWithStatistics } from '../../types';
import { getStatValue } from '../../utils/getStatValue';
import type { AttackingValue } from '@/shared/types/entities/statistics.values';

export const columnDefAttack: ColumnDef<TeamWithStatistics>[] = [
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
        id: 'TotalAttack',
        header: 'Total Attacks',
        accessorFn: (row) => {
            const attack = getStatValue<AttackingValue>(row.statistics, 43);
            return attack?.count ?? '-';
        },
    },
    {
        header: 'Dangerous Attacks',
        accessorFn: (row) => {
            const dangAttack = getStatValue<AttackingValue>(row.statistics, 44);
            return dangAttack?.count ?? '-';
        },
    },
    {
        header: 'Dangerous Attack Rate (%)',
        accessorFn: (row) => {
            const attack = getStatValue<AttackingValue>(row.statistics, 43);
            const dangAttack = getStatValue<AttackingValue>(row.statistics, 44);

            if (!attack?.count || !dangAttack?.count) return null;

            const result = (dangAttack.count / attack.count) * 100;

            return result.toFixed(2) + ' %';
        },
    },
];
