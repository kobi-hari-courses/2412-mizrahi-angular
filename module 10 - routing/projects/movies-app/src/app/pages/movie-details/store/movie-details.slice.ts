import { Movie } from "../../../models/movie.model";

export interface MovieDetailsSlice {
    readonly movie: Movie | null;
    readonly isBusy: boolean;
}

export const initialMovieDetailsSlice: MovieDetailsSlice = {
    movie: null,
    isBusy: false,
};