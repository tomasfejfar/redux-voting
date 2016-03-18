import { List, Map, fromJS } from 'immutable';

export const INITIAL_STATE = Map();

export function setEntries(state, entries) {
  return state.set('entries', List(entries));
}

function getWinners(voteState) {
  if (!voteState.count()) return [];
  const [a, b] = voteState.get('pair');
  const votesA = voteState.getIn(['tally', a], 0);
  const votesB = voteState.getIn(['tally', b], 0);
  if (votesA > votesB) {
    return [a];
  } else if (votesB > votesA) {
    return [b];
  } else {
    return [a, b];
  }
}

export function next(state) {
  const voteState = state.has('vote') ? state.get('vote') : Map({});
  const winners = getWinners(voteState);
  const entries = state.get('entries').concat(winners);

  if (entries.count() === 1) {
    return state.remove('vote')
      .remove('entries')
      .set('winner', entries.first());
  }

  const tally = voteState.has('tally') ? voteState.get('tally') : false;


  const resultState = state
    .setIn(['vote', 'pair'], entries.take(2))
    .setIn(['entries'], entries.skip(2))
    .removeIn(['vote', 'tally']);
  if (tally) {
    return resultState.updateIn(['vote', 'history'], fromJS([]), history => {
      return history.push(tally);
    });
  }

  return resultState;
}

export function vote(state, selected) {
  return state.updateIn(
    ['tally', selected],
    0,
    tally => tally + 1
  );
}
