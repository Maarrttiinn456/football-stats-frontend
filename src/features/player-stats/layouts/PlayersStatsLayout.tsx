import RouteTabs from '@/shared/components/RouteTabs';
import { Outlet } from 'react-router';

const PlayerStatsLayout = () => {
    return (
        <div>
            <RouteTabs
                variant="button"
                items={[
                    {
                        value: 'main',
                        label: 'Main',
                        to: `main`,
                    },
                    {
                        value: 'attacking',
                        label: 'Attacking',
                        to: `attacking`,
                    },
                    {
                        value: 'goalkeeping',
                        label: 'Goalkeeping',
                        to: `goalkeeping`,
                    },
                    {
                        value: 'defending',
                        label: 'Defending',
                        to: `defending`,
                    },
                ]}
                fallbackValue="main"
            />
            <div className="mt-8">
                <Outlet />
            </div>
        </div>
    );
};

export default PlayerStatsLayout;
