import { FC, ReactNode } from 'react';

import styles from './AppLayout.module.scss';
import Navigation from './Navigation/Navigation';
import Sidebar from './Sidebar/Sidebar';

interface LayoutProps {
	children: ReactNode;
}
  

const AppLayout: FC<LayoutProps> = ({ children }) => {
	return (
		<div className={styles.layout}>
			<Navigation />
			<div className={styles.center}>{ children }</div>
			<Sidebar />
		</div>
	);
};

export default AppLayout;
