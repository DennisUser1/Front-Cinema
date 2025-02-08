import { GenreService } from "@/services/genre.service";
import { useQuery } from "@tanstack/react-query";
import { IMenuItem } from "../menu.interface";
import { getGenreUrl } from "@/config/url.config";

export const usePopularGenres = () => {
    const queryData = useQuery('popular genre menu', () => GenreService.getPopularGenres(), {
select: ({data}) => data.map(genre => ({
    icon: genre.icon,
    link: getGenreUrl(genre.slug),
    title: genre.name
} as IMenuItem)).splice(0, 4);


    })
    return queryData;
}; /* Expected 1-2 arguments, but got 3    Binding element data implicitly has an any type*/