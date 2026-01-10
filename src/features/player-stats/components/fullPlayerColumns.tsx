import type { ColumnDef } from '@tanstack/react-table';
import type { PlayerStatsRow } from '../types';

export const fullPlayerColumns: ColumnDef<PlayerStatsRow>[] = [
    {
        header: '#',
        cell: ({ row }) => row.index + 1,
    },
    {
        header: 'Name',
        cell: ({ row }) => {
            const { image_path, display_name, position } = row.original.player;

            return (
                <div className="flex gap-x-3">
                    <img
                        className="w-8 object-contain"
                        src={image_path}
                        alt={display_name}
                    />
                    <div>
                        <div>{display_name}</div>
                        <div>{position?.name ?? ''}</div>
                    </div>
                </div>
            );
        },
    },
    {
        header: 'Club',
        cell: ({ row }) => (
            <img className="w-6" src={row.original.team.image_path} alt="" />
        ),
    },
    {
        header: 'Starts',
        accessorFn: (row) => row.gamePlayed ?? 0,
    },
    {
        header: 'Total',
        accessorKey: 'rawNumber',
        accessorFn: (row) => row.value ?? 0,
    },
];
