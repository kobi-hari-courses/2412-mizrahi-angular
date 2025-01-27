import { PartialStateUpdater } from "@ngrx/signals";
import { MovieDetailsSlice } from "./movie-details.slice";
import { MoviesListSlice } from "../../movies-list/store/movies-list.slice";
import { Movie } from "../../../models/movie.model";

export function setBusy(): PartialStateUpdater<MovieDetailsSlice> {
    return _ => ({ isBusy: true });
}

export function setIdle(): PartialStateUpdater<MovieDetailsSlice> {
    return _ => ({ isBusy: false });
}

export function setMovie(movie: Movie): PartialStateUpdater<MovieDetailsSlice> {
    return _ => ({ movie });
}
