import { FC } from 'react';

import styles from './Menu.module.scss';
import MenuItem from './MenuItem';
import { IMenu } from './menu.interface';
import AuthItems from './auth/AuthItems';

const Menu: FC<{ menu: IMenu }> = ({ menu: { title, items } }) => {
	return (
		<div className={styles.menu}>
			<div className={styles.heading}>{title}</div>
			<ul className={styles.list}>
				{items.map((item) => (
					<MenuItem item={item} key={item.link} />
				))}
                {title === 'General' ? <AuthItems /> : null}
			</ul>
		</div>
	);
};

export default Menu;
