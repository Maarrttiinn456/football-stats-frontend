import { getRuleClass } from '@/components/league/standingsRuleStyles';
import type {
    StandingsTableRowBase,
    StandingsTableRowExtended,
} from '@/types/standings';
import type { ColumnDef } from '@tanstack/react-table';
import { Link } from 'react-router';

type Variant = 'base' | 'extended';

export function getStandingsColumns(
    variant?: 'base'
): ColumnDef<StandingsTableRowBase>[];
export function getStandingsColumns(
    variant: 'extended'
): ColumnDef<StandingsTableRowExtended>[];

export function getStandingsColumns(variant: Variant = 'base') {
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
                return (
                    <Link to={`/team/${row.original.id}`}>
                        <div className="flex gap-x-3 items-center">
                            <img className="h-6" src={image_path} alt={name} />
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
                const { name, image_path } = row.original.participant;
                return (
                    <Link to={`/team/${row.original.id}`}>
                        <div className="flex gap-x-3 items-center">
                            <img className="h-6" src={image_path} alt={name} />
                            <div>{name}</div>
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

    return variant === 'extended' ? extended : base;
}
