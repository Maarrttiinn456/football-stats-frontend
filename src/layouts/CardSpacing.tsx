import type { ReactNode } from 'react';

const CardSpacing = ({ children }: { children: ReactNode }) => {
    return <div className="space-y-4 space-y-4">{children}</div>;
};

export default CardSpacing;
