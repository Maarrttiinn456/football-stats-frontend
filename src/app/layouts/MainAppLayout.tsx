import GlobalHeader from '@/app/layouts/GlobalHeader';
import { Outlet } from 'react-router';
import Navigation from './Navigation';

const MainAppLayout = () => {
    return (
        <>
            <GlobalHeader />
            <div className="container mb-28">
                <Outlet />
            </div>
            <Navigation />
        </>
    );
};

export default MainAppLayout;
