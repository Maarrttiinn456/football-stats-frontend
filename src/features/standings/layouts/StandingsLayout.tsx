import RouteTabs from '@/shared/components/RouteTabs';
import { Outlet } from 'react-router';

const StandingsLayout = () => {
    return (
        <div>
            <RouteTabs
                variant="button"
                items={[
                    {
                        value: 'base',
                        label: 'Base',
                        to: `base`,
                    },
                    {
                        value: 'extended',
                        label: 'Extended',
                        to: `extended`,
                    },
                ]}
                fallbackValue="base"
            />
            <div className="mt-8">
                <Outlet />
            </div>
        </div>
    );
};

export default StandingsLayout;
