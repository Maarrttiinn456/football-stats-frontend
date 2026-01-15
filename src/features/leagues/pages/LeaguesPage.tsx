import useGetLeagues from '@/features/leagues/queries/useGetLeagues';
import { Button } from '@/shared/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router';
import { SpinnerCustom } from '@/shared/ui/spinner';
import type { League } from '../types';
import { CardBase } from '@/shared/components/CardBase';

const LeaguesPage = () => {
    const { data: leagues, isLoading, isError, error } = useGetLeagues();

    if (isLoading) {
        return <SpinnerCustom />;
    }

    if (isError) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className="grid sm:grid-cols-2 gap-4">
            {leagues?.map((league: League) => {
                return (
                    <Link
                        to={`/league/${league.id}/${league.currentseason?.id}`}
                        className="block"
                    >
                        <CardBase key={league.id}>
                            <CardBase.Header
                                title={league.name}
                                description={
                                    <div className="flex gap-x-2 items-center">
                                        <img
                                            className="h-3"
                                            src={league.country?.image_path}
                                            alt={league.country?.name}
                                        />
                                        {league.country?.name}
                                    </div>
                                }
                                action={
                                    <Button
                                        size="icon-sm"
                                        className="cursor-pointer"
                                        aria-label="Submit"
                                    >
                                        <ArrowRight />
                                    </Button>
                                }
                            />
                        </CardBase>
                    </Link>
                );
            })}
        </div>
    );
};

export default LeaguesPage;
