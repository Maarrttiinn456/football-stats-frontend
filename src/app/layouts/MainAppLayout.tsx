import GlobalHeader from '@/app/layouts/GlobalHeader';
import { Outlet } from 'react-router';

const MainAppLayout = () => {
    return (
        <>
            <GlobalHeader />
            <div className="container mb-28">
                <Outlet />
            </div>
        </>
    );
};

export default MainAppLayout;
