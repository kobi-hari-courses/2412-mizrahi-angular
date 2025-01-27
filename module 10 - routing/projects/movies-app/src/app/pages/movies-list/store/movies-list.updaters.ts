import { PartialStateUpdater } from "@ngrx/signals";
import { MoviesListSlice } from "./movies-list.slice";
import { Movie } from "../../../models/movie.model";

export function setBusy(): PartialStateUpdater<MoviesListSlice> {
    return _ => ({ isBusy: true });
}

export function setIdle(): PartialStateUpdater<MoviesListSlice> {
    return _ => ({ isBusy: false });
}

export function setMovies(movies: Movie[]): PartialStateUpdater<MoviesListSlice> {
    return _ => ({ movies });
}