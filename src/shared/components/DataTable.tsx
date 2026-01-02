import { flexRender, type Table as ReactTable } from '@tanstack/react-table';
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
    caption?: React.ReactNode;
};

const DataTable = <TData,>({ table, caption }: DataTableProps<TData>) => {
    return (
        <Table>
            {caption && <TableCaption>{caption}</TableCaption>}

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
    );
};

export default DataTable;
