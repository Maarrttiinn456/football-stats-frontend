import { ModeToggle } from '@/shared/components/ModeToggle';

const GlobalHeader = () => {
    return (
        <div className="container mb-6">
            <div className=" flex justify-between py-4 ">
                <div className="font-light">
                    <span className="font-bold text-black dark:text-primary text-3xl">
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

export default GlobalHeader;
