import { createReducer, on } from "@ngrx/store"
import { HomeStateInterface } from "../types/home-state-interface"
import * as HomeActions from "./actions";

export const initialState: HomeStateInterface = {
    invite: false
}

export const reducers = createReducer(initialState,
     on(HomeActions.showInvite,(state) => ({...state, invite: true})),
     on(HomeActions.hideInvite,(state) => ({...state, invite: false}))
     )