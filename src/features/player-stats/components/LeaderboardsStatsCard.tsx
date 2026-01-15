import React, { Suspense, useMemo, useState } from 'react';
import { ZoomIn } from 'lucide-react';
import { CardBase } from '@/shared/components/CardBase';
import { playerColumns } from './playerColumns';
import DataTable from '@/shared/components/DataTable';
import { SpinnerCustom } from '@/shared/ui/spinner';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/shared/ui/dialog';
import type { PlayerStatsRow } from '../types';
import {
    getCoreRowModel,
    getSortedRowModel,
    useReactTable,
} from '@tanstack/react-table';

const FullLeaderboardTable = React.lazy(() => import('./FullLeaderboardTable'));

type LeaderboardsStatsCardProps = {
    title: string;
    description: string;
    tableData: PlayerStatsRow[];
};

const LeaderboardsStatsCard = ({
    title,
    description,
    tableData,
}: LeaderboardsStatsCardProps) => {
    const [open, setOpen] = useState(false);

    const topPlayers = useMemo(() => {
        return tableData.slice(0, 5);
    }, [tableData]);

    // eslint-disable-next-line react-hooks/incompatible-library
    const topTable = useReactTable({
        data: topPlayers ?? [],
        columns: playerColumns ?? [],
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
    });

    return (
        <CardBase>
            <CardBase.Header
                title={title}
                description={description}
                action={
                    <Dialog open={open} onOpenChange={setOpen}>
                        <DialogTrigger asChild>
                            <ZoomIn className="cursor-pointer" />
                        </DialogTrigger>
                        {open && (
                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle>{title}</DialogTitle>
                                    <div className="text-sm">{description}</div>
                                </DialogHeader>
                                <Suspense fallback={<SpinnerCustom />}>
                                    <FullLeaderboardTable
                                        tableData={tableData}
                                    />
                                </Suspense>
                            </DialogContent>
                        )}
                    </Dialog>
                }
            />
            <CardBase.Content>
                <DataTable table={topTable} />
            </CardBase.Content>
        </CardBase>
    );
};

export default LeaderboardsStatsCard;
