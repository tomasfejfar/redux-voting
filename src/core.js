import { List, Map } from 'immutable';

export const INITIAL_STATE = Map();

export function setEntries(state, entries) {
  return state.set('entries', List(entries));
}

function getWinners(voteState) {
  if (!voteState) return [];
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
  const winners = getWinners(state.get('vote'));
  const entries = state.get('entries').concat(winners);
  if (entries.count() === 1) {
    return state.remove('vote')
      .remove('entries')
      .set('winner', entries.first());
  }
  return state.merge({
    vote: Map({
      pair: entries.take(2),
    }),
    entries: entries.skip(2),
  });
}

export function vote(state, selected) {
  return state.updateIn(
    ['tally', selected],
    0,
    tally => tally + 1
  );
}
