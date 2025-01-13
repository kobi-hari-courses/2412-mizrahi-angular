import { PartialStateUpdater } from "@ngrx/signals";
import { AppSlice } from "./app.slice";

export function incrementX(): PartialStateUpdater<AppSlice> {
    return state => ({x: Math.min(state.x + 1, 5)});
}

export function incrementY(): PartialStateUpdater<AppSlice> {
    return state => ({y: state.y + 1});
}