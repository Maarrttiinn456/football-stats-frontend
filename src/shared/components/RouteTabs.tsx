import { Link, useLocation } from 'react-router';
import { Tabs, TabsList, TabsTrigger } from '@/shared/ui/tabs';
import { Button } from '@/shared/ui/button';

export type RouteTabItem = {
    value: string;
    label: string;
    to: string;
};

type RouteTabsProps = {
    items: RouteTabItem[];
    fallbackValue?: string;
    variant?: 'tab' | 'button';
};

const RouteTabs = ({
    items,
    fallbackValue,
    variant = 'tab',
}: RouteTabsProps) => {
    const location = useLocation();

    const active =
        items.find((i) => location.pathname.includes(`/${i.value}`))?.value ??
        fallbackValue;

    if (variant === 'button') {
        return (
            <div className="flex gap-2">
                {items.map((item) => {
                    const isActive = item.value === active;

                    return (
                        <Button
                            key={item.value}
                            asChild
                            size="sm"
                            variant={isActive ? 'default' : 'outline'}
                        >
                            <Link to={item.to}>{item.label}</Link>
                        </Button>
                    );
                })}
            </div>
        );
    }

    return (
        <Tabs value={active}>
            <TabsList className="w-full">
                {items.map((item) => (
                    <TabsTrigger key={item.value} value={item.value} asChild>
                        <Link to={item.to}>{item.label}</Link>
                    </TabsTrigger>
                ))}
            </TabsList>
        </Tabs>
    );
};

export default RouteTabs;
