'use client';

import cn from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC } from 'react';

import MaterialIcon from '@/components/ui/MaterialIcon';

import styles from './Menu.module.scss';
import { IMenuItem } from './menu.interface';

const MenuItem: FC<{ item: IMenuItem }> = ({ item }) => {
	const pathname = usePathname();

	return (
		<li
			className={cn({
				[styles.active]: pathname === item.link,
			})}
		>
			<Link href={item.link}>
				<MaterialIcon name={item.icon} />
				<span>{item.title}</span>
			</Link>
		</li>
	);
};

export default MenuItem;
