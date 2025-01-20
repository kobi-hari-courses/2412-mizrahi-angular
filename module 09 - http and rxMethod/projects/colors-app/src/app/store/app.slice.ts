import { Color } from "../models/colors.model";

export interface AppSlice {
    readonly isBusy: boolean;
    readonly results: Color[];
}

export const initialAppSlice: AppSlice = {
    isBusy: false,
    results: []
};