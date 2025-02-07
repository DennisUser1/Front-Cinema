import { FC } from 'react';

import AppLayout from '@/components/layout/AppLayout';

import { IHome } from './home.interface';

const Home: FC<IHome> = () => {
	return (
		<AppLayout>
			<h1>Home page</h1>
		</AppLayout>
	);
};

export default Home;
