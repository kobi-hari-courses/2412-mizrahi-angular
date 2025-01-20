import { PartialStateUpdater } from "@ngrx/signals";
import { AppSlice } from "./app.slice";
import { Color } from "../models/colors.model";

export function setBusy(): PartialStateUpdater<AppSlice> {
    return _ => ({ isBusy: true });
}

export function setIdle(): PartialStateUpdater<AppSlice> {
    return _ => ({ isBusy: false });
}

export function toggleBusy(): PartialStateUpdater<AppSlice> {
    return state => ({ isBusy: !state.isBusy });
}

export function setResults(value: Color[]): PartialStateUpdater<AppSlice> {
    return _ => ({ results: value });
}