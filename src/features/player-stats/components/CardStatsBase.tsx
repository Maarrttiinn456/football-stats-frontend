import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
} from '@/shared/ui/card';
import type { ReactNode } from 'react';

type CardStatsProps = {
    title?: string;
    description?: string;
    children: ReactNode;
};

const CardStatsBase = ({ title, description, children }: CardStatsProps) => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription> {description} </CardDescription>
            </CardHeader>
            <CardContent>{children}</CardContent>
        </Card>
    );
};

export default CardStatsBase;
