import { Trophy } from 'lucide-react';
import { Shirt } from 'lucide-react';
import { List } from 'lucide-react';
import { Link, useLocation } from 'react-router';

const Navigation = () => {
    const location = useLocation();

    const pathName = location.pathname;

    return (
        <div className="fixed bottom-0 w-full bg-card py-4">
            <div className="grid grid-cols-3">
                <Link
                    to="live-score"
                    className={`flex flex-col items-center ${
                        pathName.startsWith('/live-score')
                            ? 'text-primary'
                            : 'text-card-foreground'
                    }`}
                >
                    <List />
                    <div className="mt-1">Live score</div>
                </Link>
                <Link
                    to="leagues"
                    className={`flex flex-col items-center ${
                        pathName.startsWith('/leagues')
                            ? 'text-primary'
                            : 'text-card-foreground'
                    }`}
                >
                    <Trophy />
                    <div className="mt-1">Leagues</div>
                </Link>
                <Link
                    to="teams"
                    className={`flex flex-col items-center ${
                        pathName.startsWith('/teams')
                            ? 'text-primary'
                            : 'text-card-foreground'
                    }`}
                >
                    <Shirt />
                    <div className="mt-1">Teams</div>
                </Link>
            </div>
        </div>
    );
};

export default Navigation;
