"use client";

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { FC, ReactNode } from 'react';

import AppLayout from '@/components/layout/AppLayout';

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
});

interface MainProviderProps {
	children: ReactNode;
}

const MainProvider: FC<MainProviderProps> = ({ children }) => {
	return (
		<QueryClientProvider client={queryClient}>
			<AppLayout>{children}</AppLayout>
		</QueryClientProvider>
	);
};

export default MainProvider;
