import { ModeToggle } from '@/shared/components/ModeToggle';

const Header = () => {
    return (
        <div className="container mb-6">
            <div className=" flex justify-between py-4 ">
                <div className="font-light">
                    <span className="font-bold text-lime-900 dark:text-lime-200 text-3xl">
                        Football
                    </span>
                    Stats
                </div>
                <div>
                    <ModeToggle />
                </div>
            </div>
        </div>
    );
};

export default Header;
