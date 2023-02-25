import { createReducer, on } from "@ngrx/store"
import { InviteStateInterface } from "../../types/invite-state.interface"
import * as InviteActions from "../Actions/invite.actions";

export const initialState: InviteStateInterface = {
    invite: false
}

export const inviteReducers = createReducer(initialState,
     on(InviteActions.showInvite,(state) => ({...state, invite: true})),
     on(InviteActions.hideInvite,(state) => ({...state, invite: false}))
     )