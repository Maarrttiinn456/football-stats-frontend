import RouteTabs from '@/shared/components/RouteTabs';
import { Outlet } from 'react-router';

const TeamsStatsLayout = () => {
    return (
        <div>
            <RouteTabs
                variant="button"
                items={[
                    {
                        value: 'shots',
                        label: 'Shots',
                        to: `shots`,
                    },
                    {
                        value: 'possesion-passing',
                        label: 'Possession & passing',
                        to: `possesion-passing`,
                    },
                    {
                        value: 'attacking',
                        label: 'Attacking',
                        to: `attacking`,
                    },
                    {
                        value: 'defending',
                        label: 'Defending',
                        to: `defending`,
                    },
                ]}
                fallbackValue="shots"
            />
            <div className="mt-8">
                <Outlet />
            </div>
        </div>
    );
};

export default TeamsStatsLayout;
