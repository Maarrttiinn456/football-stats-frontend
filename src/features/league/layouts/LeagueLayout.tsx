import RouteTabs from '@/shared/components/RouteTabs';
import { Outlet } from 'react-router';
import LeagueHeader from '../components/LeagueHeader';

const LeagueLayout = () => {
    return (
        <>
            <LeagueHeader />
            <div className="mt-10">
                <RouteTabs
                    items={[
                        { value: 'standings', label: 'Table', to: `standings` },
                        /*
                        {
                            value: 'fixtures',
                            label: 'Fixtures',
                            to: `fixtures`,
                        },
                        */
                        {
                            value: 'players-stats',
                            label: 'Players stats',
                            to: `players-stats`,
                        },
                        {
                            value: 'teams-stats',
                            label: 'Teams stats',
                            to: `teams-stats`,
                        },
                    ]}
                    fallbackValue="standings"
                />
                <div className="mt-6">
                    <Outlet />
                </div>
            </div>
        </>
    );
};

export default LeagueLayout;
