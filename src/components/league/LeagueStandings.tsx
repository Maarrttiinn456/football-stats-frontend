import { useState } from 'react';
import { useParams } from 'react-router';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import {
    getCoreRowModel,
    useReactTable,
    flexRender,
    getSortedRowModel,
} from '@tanstack/react-table';
import type { SortingState } from '@tanstack/react-table';
import useGetStansings from '@/queries/useGetStandings';
import { SpinnerCustom } from '../ui/spinner';
import { Card, CardContent, CardHeader } from '../ui/card';

import { TableRuleClass } from './standingsRuleStyles';
import { getStandingsColumns } from './standingsColumn';
import { Button } from '../ui/button';

const LeagueStandings = () => {
    const { seasonId } = useParams();

    const seasonIdNumber = seasonId ? Number(seasonId) : undefined;

    const [isTableExtended, setIsTableExtended] = useState(false);

    const {
        data: standings,
        isLoading,
        isError,
        error,
    } = useGetStansings(seasonIdNumber);

    const [sorting, setSorting] = useState<SortingState>([]);

    const baseColumns = getStandingsColumns('base');
    const extendedColumns = getStandingsColumns('extended');

    // eslint-disable-next-line react-hooks/incompatible-library
    const baseTable = useReactTable({
        data: standings?.base ?? [],
        columns: baseColumns,
        state: { sorting },
        onSortingChange: setSorting,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
    });

    const extendedTable = useReactTable({
        data: standings?.extended ?? [],
        columns: extendedColumns,
        state: { sorting },
        onSortingChange: setSorting,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
    });

    const table = isTableExtended ? extendedTable : baseTable;

    if (isLoading) {
        return (
            <div>
                <SpinnerCustom />
            </div>
        );
    }

    if (isError) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <Card>
            <CardHeader>
                <div className="flex gap-2 mb-4">
                    <Button
                        variant={!isTableExtended ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setIsTableExtended(false)}
                    >
                        Base
                    </Button>
                    <Button
                        variant={isTableExtended ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setIsTableExtended(true)}
                    >
                        Extended
                    </Button>
                </div>
            </CardHeader>

            <CardContent>
                <Table>
                    <TableCaption>
                        {Object.entries(TableRuleClass).map(
                            ([ruleName, bgClass]) => (
                                <div
                                    key={ruleName}
                                    className="flex items-center gap-2"
                                >
                                    <span
                                        className={`w-3 h-3 rounded-sm ${bgClass}`}
                                    />
                                    <span className="text-sm">{ruleName}</span>
                                </div>
                            )
                        )}
                    </TableCaption>
                    <TableHeader>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => (
                                    <TableHead key={header.id}>
                                        {flexRender(
                                            header.column.columnDef.header,
                                            header.getContext()
                                        )}
                                    </TableHead>
                                ))}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows.map((row) => (
                            <TableRow key={row.id}>
                                {row.getVisibleCells().map((cell) => (
                                    <TableCell key={cell.id}>
                                        {flexRender(
                                            cell.column.columnDef.cell,
                                            cell.getContext()
                                        )}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    );
};

export default LeagueStandings;
