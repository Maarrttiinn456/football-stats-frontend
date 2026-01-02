import { useState } from 'react';
import { useParams } from 'react-router';
import {
    getCoreRowModel,
    useReactTable,
    getSortedRowModel,
} from '@tanstack/react-table';
import useGetStansings from '@/features/standings/queries/useGetStandings';
import { getStandingsColumns } from './standingsColumn';
import { SpinnerCustom } from '@/shared/ui/spinner';
import { Card, CardContent, CardHeader } from '@/shared/ui/card';
import { Button } from '@/shared/ui/button';
import { TableRuleClass } from '../utils/standingsRuleStyles';
import DataTable from '@/shared/components/DataTable';

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

    const baseColumns = getStandingsColumns('base');
    const extendedColumns = getStandingsColumns('extended');

    // eslint-disable-next-line react-hooks/incompatible-library
    const baseTable = useReactTable({
        data: standings?.base ?? [],
        columns: baseColumns,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
    });

    const extendedTable = useReactTable({
        data: standings?.extended ?? [],
        columns: extendedColumns,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
    });

    const tableRules = Object.entries(TableRuleClass).map(
        ([ruleName, bgClass]) => (
            <div key={ruleName} className="flex items-center gap-2">
                <span className={`w-3 h-3 rounded-sm ${bgClass}`} />
                <span className="text-sm">{ruleName}</span>
            </div>
        )
    );

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
                {isTableExtended ? (
                    <DataTable table={extendedTable} caption={tableRules} />
                ) : (
                    <DataTable table={baseTable} caption={tableRules} />
                )}
            </CardContent>
        </Card>
    );
};

export default LeagueStandings;
