import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            // ⏱ data jsou 5 minut považována za "čerstvá"
            staleTime: 5 * 60 * 1000,

            // 🗄 cache držíme 30 minut
            gcTime: 30 * 60 * 1000,

            // ❌ NErefetchuj při každém focusu okna
            refetchOnWindowFocus: false,

            // ❌ NErefetchuj při reconnectu
            refetchOnReconnect: false,

            // ❌ NErefetchuj při mountu pokud máme cache
            refetchOnMount: false,

            // 🔁 když už chyba, zkus max 1×
            retry: 1,

            // ⏳ malá pauza mezi retrysy
            retryDelay: 1000,
        },
    },
});
