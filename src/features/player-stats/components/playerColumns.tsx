import type { ColumnDef } from '@tanstack/react-table';
import type { PlayerStats } from '../types';

export const playerColumns: ColumnDef<PlayerStats>[] = [
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
        header: 'Total',
        accessorFn: (row) => row.details[0]?.value.total ?? 0,
    },
];
