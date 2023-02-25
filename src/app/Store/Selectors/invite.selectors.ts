import { createSelector } from "@ngrx/store";
import { AppStateInterface } from "src/app/Types/appstate.interface";

export const selectFeature = (state: AppStateInterface) => state.invite;

export const showInviteSelector = createSelector(selectFeature,
    (state) => state.invite
)
export const hideInviteSelector = createSelector(selectFeature,
   (state) => state.invite
    )