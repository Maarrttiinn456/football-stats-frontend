import useGetLeagues from '@/features/leagues/queries/useGetLeagues';
import CardSpacing from '@/shared/layouts/CardSpacing';
import {
    Card,
    CardAction,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/shared/ui/card';
import { Button } from '@/shared/ui/button';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router';
import { SpinnerCustom } from '@/shared/ui/spinner';
import type { League } from '../types';

const LeaguesPage = () => {
    const { data: leagues, isLoading, isError, error } = useGetLeagues();

    const navigate = useNavigate();

    if (isLoading) {
        return <SpinnerCustom />;
    }

    if (isError) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <CardSpacing>
            {leagues?.map((league: League) => {
                return (
                    <Card key={league.id}>
                        <CardHeader>
                            <CardTitle>{league.name}</CardTitle>
                            <CardDescription>
                                <div className="flex gap-x-2 items-center">
                                    <img
                                        className="h-3"
                                        src={league.country?.image_path}
                                        alt={league.country?.name}
                                    />
                                    {league.country?.name}
                                </div>
                            </CardDescription>
                            <CardAction>
                                <Button
                                    onClick={() =>
                                        navigate(
                                            `/league/${league.id}/${league.currentseason?.id}`
                                        )
                                    }
                                    size="icon-sm"
                                    aria-label="Submit"
                                >
                                    <ArrowRight />
                                </Button>
                            </CardAction>
                        </CardHeader>
                    </Card>
                );
            })}
        </CardSpacing>
    );
};

export default LeaguesPage;
