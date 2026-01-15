import type { ColumnDef } from '@tanstack/react-table';
import type { StandingsTableRowBase } from '../types';
import { Link } from 'react-router';
import { getRuleClass } from '../utils/standingsRuleStyles';

const getBaseStandingsColumns = (seasonId?: string) => {
    const base: ColumnDef<StandingsTableRowBase>[] = [
        {
            header: '#',
            accessorKey: 'position',
            cell: ({ row }) => (
                <div className="relative">
                    {row.original.position}
                    <div
                        className={`absolute top-0 -left-2 h-full w-0.5 ${getRuleClass(
                            row.original.rule?.code
                        )}`}
                    />
                </div>
            ),
        },
        {
            header: 'Team',
            id: 'teamName',
            cell: ({ row }) => {
                const { name, image_path } = row.original.participant;
                const to = seasonId
                    ? `/team/${row.original.id}/${seasonId}`
                    : `/team/${row.original.id}`;
                return (
                    <Link to={`${to}`}>
                        <div className="flex gap-x-3 items-center">
                            <img className="h-5" src={image_path} alt={name} />
                            <div>{name}</div>
                        </div>
                    </Link>
                );
            },
        },
        { header: 'PL', accessorKey: 'matchesPlayed' },
        { header: 'GD', accessorKey: 'goalDifference' },
        { header: 'PTS', accessorKey: 'points' },
    ];

    return base;
};

export default getBaseStandingsColumns;
