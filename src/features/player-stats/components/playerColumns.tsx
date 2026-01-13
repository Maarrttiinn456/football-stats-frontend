import type { ColumnDef } from '@tanstack/react-table';
import type { PlayerStatsRow } from '../types';

export const playerColumns: ColumnDef<PlayerStatsRow>[] = [
    {
        id: 'rank',
        header: '#',
        enableSorting: false,
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
                        <div className="text-foreground/50">
                            {position?.name ?? ''}
                        </div>
                    </div>
                </div>
            );
        },
    },
    {
        header: 'Club',
        cell: ({ row }) => (
            <div className="flex justify-center items-center">
                <img
                    className="w-5"
                    src={row.original.team.image_path}
                    alt=""
                />
            </div>
        ),
    },
    {
        header: 'Total',
        accessorFn: (row) => row.value ?? 0,
    },
];
