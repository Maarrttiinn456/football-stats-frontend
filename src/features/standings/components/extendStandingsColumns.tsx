import type { ColumnDef } from '@tanstack/react-table';
import type { StandingsTableRowExtended } from '../types';
import { Link } from 'react-router';
import { getRuleClass } from '../utils/standingsRuleStyles';

const getExtendedStandingsColumns = (seasonId?: string) => {
    const extended: ColumnDef<StandingsTableRowExtended>[] = [
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
                const { name, image_path, short_code } =
                    row.original.participant;
                const to = seasonId
                    ? `/team/${row.original.id}/${seasonId}`
                    : `/team/${row.original.id}`;
                return (
                    <Link to={`${to}`}>
                        <div className="flex gap-x-3 items-center w-max">
                            <img className="h-5" src={image_path} alt={name} />
                            <div>{short_code}</div>
                        </div>
                    </Link>
                );
            },
        },
        { header: 'PL', accessorKey: 'matchesPlayed' },
        { header: 'W', accessorKey: 'overallWon' },
        { header: 'D', accessorKey: 'overallDraw' },
        { header: 'L', accessorKey: 'overallLost' },
        { header: 'GF', accessorKey: 'goalFor' },
        { header: 'GA', accessorKey: 'goalAgainst' },
        { header: 'GD', accessorKey: 'goalDifference' },
        { header: 'PTS', accessorKey: 'points' },
        {
            header: 'Form',
            accessorKey: 'form',
            cell: ({ row }) => {
                const form = row.original.form ?? [];
                return (
                    <div className="flex gap-1">
                        {form.slice(0, 5).map((f, i) => (
                            <span
                                key={`${row.original.id}-${i}`}
                                className="inline-flex h-5 w-5 items-center justify-center rounded bg-muted text-[10px] font-medium"
                            >
                                {f}
                            </span>
                        ))}
                    </div>
                );
            },
        },
    ];

    return extended;
};

export default getExtendedStandingsColumns;
