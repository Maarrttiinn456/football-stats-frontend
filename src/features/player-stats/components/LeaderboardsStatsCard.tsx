import { CardBase } from '@/shared/components/CardBase';
import type { PlayerStats } from '../types';
import {
    getCoreRowModel,
    getSortedRowModel,
    useReactTable,
} from '@tanstack/react-table';
import { playerColumns } from './playerColumns';
import { ZoomIn } from 'lucide-react';
import DataTable from '@/shared/components/DataTable';
import { useMemo } from 'react';

type LeaderboardsStatsCardProps = {
    title: string;
    description: string;
    tableData: PlayerStats[];
};

const LeaderboardsStatsCard = ({
    title,
    description,
    tableData,
}: LeaderboardsStatsCardProps) => {
    const numberOfShowPlayers = useMemo(() => {
        return tableData.slice(0, 5);
    }, [tableData]);

    // eslint-disable-next-line react-hooks/incompatible-library
    const table = useReactTable({
        data: numberOfShowPlayers ?? [],
        columns: playerColumns ?? [],
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
    });

    return (
        <CardBase>
            <CardBase.Header
                title={title}
                description={description}
                action={<ZoomIn />}
            />
            <CardBase.Content>
                <DataTable table={table} />
            </CardBase.Content>
        </CardBase>
    );
};

export default LeaderboardsStatsCard;
