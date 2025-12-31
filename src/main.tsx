import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './app/App.tsx';
import { BrowserRouter } from 'react-router';
import { ThemeProvider } from './app/providers/ThemeProvider.tsx';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './app/query/queryClient.ts';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <QueryClientProvider client={queryClient}>
            <ThemeProvider defaultTheme="dark">
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </ThemeProvider>
            <ReactQueryDevtools initialIsOpen={true} />
        </QueryClientProvider>
    </StrictMode>
);
