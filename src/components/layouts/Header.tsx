import { ModeToggle } from '../ModeToggle';

const Header = () => {
    return (
        <div className="container flex justify-between py-4 mb-6">
            <div className="text-2xl font-light">
                {' '}
                <span className="font-bold">Foot</span>Stats
            </div>
            <div>
                <ModeToggle />
            </div>
        </div>
    );
};

export default Header;
