import type { ReactNode } from 'react';

type SubHeaderProps = {
    image: string;
    title: string;
    subtitle: string;
    children: ReactNode;
};

const SubHeader = ({ image, title, subtitle, children }: SubHeaderProps) => {
    return (
        <div className="flex justify-between items-end">
            <div className="flex items-center gap-x-4">
                <img
                    className="w-14 bg-white p-1.5 rounded-md"
                    src={image}
                    alt={title}
                />
                <div>
                    <div className="text-lg font-semibold">{title}</div>
                    <div className="text-sm">{subtitle}</div>
                </div>
            </div>
            <div>{children}</div>
        </div>
    );
};

export default SubHeader;
