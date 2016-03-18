import { List, Map } from 'immutable';
import { expect } from 'chai';
import { setEntries, next, vote } from '../src/core';

describe('application logic', () => {
  describe('set entries', () => {
    it('adds entries to current state', () => {
      const state = Map();
      const entries = List.of('Trainspotting', 'Shawshank');
      const nextState = setEntries(state, entries);
      expect(nextState).to.equal(Map({
        entries: List.of(
          'Trainspotting',
          'Shawshank'
        ),
      }));

      expect(state).to.equal(Map());
    });

    it('converts to immutable', () => {
      const state = Map();
      const entries = ['Trainspotting', 'Shawshank'];
      const nextState = setEntries(state, entries);
      expect(nextState).to.equal(Map({
        entries: List.of(
          'Trainspotting',
          'Shawshank'
        ),
      }));

      expect(state).to.equal(Map());
    });
  });

  describe('next', () => {
    it('takes next two items for vote', () => {
      const state = Map({
        entries: List.of('Trainspotting', 'Shawshank', 'Brak'),
      });
      const nextState = next(state);
      expect(nextState).to.equal(Map({
        entries: List.of('Brak'),
        vote: Map({
          pair: List.of('Trainspotting', 'Shawshank'),
        }),
      }));
    });

    it('puts winner back to the entries stack', () => {
      const state = Map({
        entries: List.of('Brak', 'Forest Gump'),
        vote: Map({
          pair: List.of('Trainspotting', 'Shawshank'),
          tally: Map({
            'Trainspotting': 3,
            'Shawshank': 2,
          }),
        }),
      });
      const nextState = next(state);
      const expected = Map({
        entries: List.of('Trainspotting'),
        vote: Map({
          pair: List.of('Brak', 'Forest Gump'),
          history: List.of([
            Map({
              'Trainspotting': 3,
              'Shawshank': 2,
            })]),
        }),
      });
      console.log('NEXT', nextState);
      console.log('EXPE', expected);
      expect(nextState).to.equal(expected);
    });

    it('add vote to history', () => {
      const state = Map({
        entries: List.of('Brak', 'Forest Gump'),
        vote: Map({
          pair: List.of('Trainspotting', 'Shawshank'),
          tally: Map({
            'Trainspotting': 3,
            'Shawshank': 2,
          }),
          history: List.of(
            Map({
              'Previous movie': 1,
              'Shawshank': 7,
            })
          ),
        }),
      });
      const nextState = next(state);
      expect(nextState).to.equal(Map({
        entries: List.of('Trainspotting'),
        vote: Map({
          pair: List.of('Brak', 'Forest Gump'),
          history: List.of(
            Map({
              'Previous movie': 1,
              'Shawshank': 7,
            }),
            Map({
              'Trainspotting': 3,
              'Shawshank': 2,
            })
          ),
        }),
      }));
    });

    it('marks winner when just one entry left', () => {
      const state = Map({
        entries: List(),
        vote: Map({
          pair: List.of('Forest Gump', 'Brak'),
          tally: Map({
            'Forest Gump': 1,
            'Brak': 3,
          }),
        }),
      });
      const nextState = next(state);
      expect(nextState).to.equal(Map({
        winner: 'Brak',
      }));
    });
  });

  describe('vote', () => {
    it('creates a tally for the voted entity', () => {
      const state = Map({
        pair: List.of('Trainspotting', 'Shawshank'),
      });
      const nextState = vote(state, 'Trainspotting');
      expect(nextState).to.equal(Map({
        pair: List.of('Trainspotting', 'Shawshank'),
        tally: Map({
          'Trainspotting': 1,
        }),
      }));
    });

    it('adds to existing tally for existing entity', () => {
      const state = Map({
        pair: List.of('Trainspotting', 'Shawshank'),
        tally: Map({
          'Trainspotting': 3,
          'Shawshank': 2,
        }),
      });
      const nextState = vote(state, 'Trainspotting');
      expect(nextState).to.equal(Map({
        pair: List.of('Trainspotting', 'Shawshank'),
        tally: Map({
          'Trainspotting': 4,
          'Shawshank': 2,
        }),
      }));
    });
  });
});
