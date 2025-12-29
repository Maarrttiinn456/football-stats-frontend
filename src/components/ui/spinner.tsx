import { LoaderIcon } from 'lucide-react';

import { cn } from '@/lib/utils';

function Spinner({ className, ...props }: React.ComponentProps<'svg'>) {
    return (
        <LoaderIcon
            role="status"
            aria-label="Loading"
            className={cn('size-4 animate-spin', className)}
            {...props}
        />
    );
}

export function SpinnerCustom() {
    return (
        <div className="fixed inset-0 flex items-center justify-center">
            <Spinner className="size-8 text-lime-800 dark:text-lime-200" />
        </div>
    );
}
