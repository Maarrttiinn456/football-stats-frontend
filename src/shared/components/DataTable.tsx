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
        <Table className="myTable">
            {caption && <TableCaption>{caption}</TableCaption>}

            <TableHeader>
                {table.getHeaderGroups().map((headerGroup) => (
                    <TableRow key={headerGroup.id}>
                        {headerGroup.headers.map((header) => (
                            <TableHead key={header.id}>
                                {header.isPlaceholder ? null : isSorting ? (
                                    <div className="header-helper-align ">
                                        <button
                                            type="button"
                                            onClick={header.column.getToggleSortingHandler()}
                                            className="flex items-center gap-1 relative cursor-pointer"
                                        >
                                            <span>
                                                {flexRender(
                                                    header.column.columnDef
                                                        .header,
                                                    header.getContext()
                                                )}
                                            </span>

                                            {{
                                                asc: (
                                                    <ArrowUp
                                                        size="14"
                                                        className="text-primary absolute -right-5 sm:-right-6"
                                                    />
                                                ),
                                                desc: (
                                                    <ArrowDown
                                                        size="14"
                                                        className="text-primary absolute -right-5 sm:-right-6"
                                                    />
                                                ),
                                            }[
                                                header.column.getIsSorted() as string
                                            ] ?? null}
                                        </button>
                                    </div>
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
                {table.getRowModel().rows.map((row, rowIndex) => (
                    <TableRow key={row.id}>
                        {row.getVisibleCells().map((cell) => (
                            <TableCell key={cell.id}>
                                {cell.column.id === 'rank'
                                    ? rowIndex + 1
                                    : flexRender(
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
