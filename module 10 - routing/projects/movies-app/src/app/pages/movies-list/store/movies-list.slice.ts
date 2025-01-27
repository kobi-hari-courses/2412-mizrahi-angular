import { Movie } from "../../../models/movie.model";

export interface MoviesListSlice {
    readonly movies: Movie[];
    isBusy: boolean;
}

export const initialMoviesListSlice: MoviesListSlice = {
    movies: [],
    isBusy: false,
};