import {Map} from "immutable";
import {setEntries, next, vote, INITIAL_STATE} from "./core";

export function reducer(previousState = INITIAL_STATE, action) {
    switch (action.type) {
        case 'SET_ENTRIES':
            return setEntries(previousState, action.entries);
        case 'NEXT':
            return next(previousState);
        case 'VOTE':
            return previousState.update('vote', voteState => vote(voteState, action.entry));
    }
    return previousState;
}


