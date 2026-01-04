import useGetLeagues from '@/features/leagues/queries/useGetLeagues';
import CardSpacing from '@/shared/layouts/CardSpacing';
import { Button } from '@/shared/ui/button';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router';
import { SpinnerCustom } from '@/shared/ui/spinner';
import type { League } from '../types';
import { CardBase } from '@/shared/components/CardBase';

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
                            }
                        />
                    </CardBase>
                );
            })}
        </CardSpacing>
    );
};

export default LeaguesPage;
