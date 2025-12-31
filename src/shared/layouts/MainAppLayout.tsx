import Header from '@/app/layouts/Header';
import { Outlet } from 'react-router';

const MainAppLayout = () => {
    return (
        <>
            <Header />
            <div className="container mb-28">
                <Outlet />
            </div>
        </>
    );
};

export default MainAppLayout;
