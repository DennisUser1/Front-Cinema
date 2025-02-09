import { useQuery } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';

import { IGenre } from '@/shared/types/movie.types';

import { GenreService } from '@/services/genre.service';

import { getGenreUrl } from '@/config/url.config';

import { IMenuItem } from '../menu.interface';

export const usePopularGenres = () => {
	const queryData = useQuery<AxiosResponse<IGenre[]>, unknown, IMenuItem[]>({
		queryKey: ['popular genre menu'],
		queryFn: async () => {
			return await GenreService.getAll();
		},
		select: (response: AxiosResponse<IGenre[]>) => {
			return response.data.splice(0, 4).map((genre) => ({
				icon: genre.icon,
				link: getGenreUrl(genre.slug),
				title: genre.name,
			}));
		},
	});

	return queryData;
};
