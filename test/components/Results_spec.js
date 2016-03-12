import React from 'react';
import { shallow } from 'enzyme';
import Results from '../../src/components/Results.jsx';
import { expect } from 'chai';
import { List, Map } from 'immutable';

const pair = List.of('Trainspotting', '28 Days Later');
const tally = new Map({ Trainspotting: 3, '28 Days Later': 1 });

describe('Results', () => {
  it('display entries with tally results', () => {
    const wrapper = shallow(<Results pair={pair} tally={tally} />);
    const entries = wrapper.find('ResultEntry');
    expect(entries.length).to.eq(2);
    expect(entries.at(0)).to.have.prop('entry', 'Trainspotting');
    expect(entries.at(1)).to.have.prop('entry', '28 Days Later');
    expect(entries.at(0)).to.have.prop('votes', 3);
    expect(entries.at(1)).to.have.prop('votes', 1);
  });
});
