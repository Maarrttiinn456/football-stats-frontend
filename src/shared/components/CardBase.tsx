import type { ReactNode } from 'react';
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/shared/ui/card';

type RootProps = {
    children: ReactNode;
};

type HeaderProps = {
    title?: ReactNode;
    description?: ReactNode;
    action?: ReactNode;
};

type SectionProps = {
    children: ReactNode;
};

const CardBaseRoot = ({ children }: RootProps) => {
    return <Card>{children}</Card>;
};

const CardBaseHeader = ({ title, description, action }: HeaderProps) => {
    if (!title && !description && !action) return null;

    return (
        <CardHeader>
            {title && <CardTitle>{title}</CardTitle>}
            {description && <CardDescription>{description}</CardDescription>}
            {action && <CardAction>{action}</CardAction>}
        </CardHeader>
    );
};

const CardBaseContent = ({ children }: SectionProps) => {
    return <CardContent>{children}</CardContent>;
};

const CardBaseFooter = ({ children }: SectionProps) => {
    return <CardFooter>{children}</CardFooter>;
};

// export jako compound component
export const CardBase = Object.assign(CardBaseRoot, {
    Header: CardBaseHeader,
    Content: CardBaseContent,
    Footer: CardBaseFooter,
});
