import Header from '@/app/layouts/Header';
import { Outlet } from 'react-router';
import Navigation from './Navigation';

const MainAppLayout = () => {
    return (
        <>
            <Header />
            <div className="container mb-28">
                <Outlet />
            </div>
            <Navigation />
        </>
    );
};

export default MainAppLayout;
