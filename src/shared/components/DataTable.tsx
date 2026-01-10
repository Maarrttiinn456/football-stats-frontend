import { flexRender, type Table as ReactTable } from '@tanstack/react-table';
import { ArrowDown, ArrowUp } from 'lucide-react';

import {
    TableCaption,
    TableHeader,
    TableRow,
    TableHead,
    TableBody,
    TableCell,
    Table,
} from '../ui/table';

type DataTableProps<TData> = {
    table: ReactTable<TData>;
    isSorting?: boolean;
    caption?: React.ReactNode;
};

const DataTable = <TData,>({
    table,
    caption,
    isSorting = false,
}: DataTableProps<TData>) => {
    return (
        <Table>
            {caption && <TableCaption>{caption}</TableCaption>}

            <TableHeader>
                {table.getHeaderGroups().map((headerGroup) => (
                    <TableRow key={headerGroup.id}>
                        {headerGroup.headers.map((header) => (
                            <TableHead key={header.id}>
                                {header.isPlaceholder ? null : isSorting ? (
                                    <button
                                        type="button"
                                        onClick={header.column.getToggleSortingHandler()}
                                        className="flex items-center gap-1"
                                    >
                                        <span>
                                            {flexRender(
                                                header.column.columnDef.header,
                                                header.getContext()
                                            )}
                                        </span>

                                        {{
                                            asc: <ArrowUp size="14" />,
                                            desc: <ArrowDown size="14" />,
                                        }[
                                            header.column.getIsSorted() as string
                                        ] ?? null}
                                    </button>
                                ) : (
                                    flexRender(
                                        header.column.columnDef.header,
                                        header.getContext()
                                    )
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
    );
};

export default DataTable;
