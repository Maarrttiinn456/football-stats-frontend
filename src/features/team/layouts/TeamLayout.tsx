import RouteTabs from '@/shared/components/RouteTabs';
import { Outlet } from 'react-router';

const TeamLayout = () => {
    return (
        <>
            <div className="py-4">This page is under development.</div>
            <RouteTabs
                items={[
                    {
                        value: 'statistics',
                        label: 'Statistics',
                        to: `statistics`,
                    },
                    {
                        value: 'matches',
                        label: 'Matches',
                        to: `matches`,
                    },
                    {
                        value: 'squad',
                        label: 'Squad',
                        to: `squad`,
                    },
                ]}
                fallbackValue="statistics"
            />
            <div className="mt-8">
                <Outlet />
            </div>
        </>
    );
};

export default TeamLayout;
