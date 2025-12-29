import useGetLeagues from '@/queries/useGetLeagues';
import CardSpacing from '@/layouts/CardSpacing';
import {
    Card,
    CardAction,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const LeaguesPage = () => {
    const { data: leagues, isLoading, isError, error } = useGetLeagues();

    if (isLoading) {
        return <div>Načítám</div>;
    }

    if (isError) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <CardSpacing>
            {leagues?.map((league) => {
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
                                <Button size="icon-sm" aria-label="Submit">
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
