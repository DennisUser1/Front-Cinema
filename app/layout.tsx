import MainProvider from 'providers/MainProvider';
import { ReactNode } from 'react';

import '../app/assets/styles/globals.scss';

interface RootLayoutProps {
	children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang="en">
			<body>
				<MainProvider>{children}</MainProvider>
			</body>
		</html>
	);
}
