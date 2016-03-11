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
    const entries = wrapper.find('div.entry');
    expect(entries.length).to.eq(2);
    expect(entries.at(0).find('h1')).to.have.text('Trainspotting');
    expect(entries.at(1).find('h1')).to.have.text('28 Days Later');
    expect(entries.at(0).find('.voteCount')).to.have.text('3');
    expect(entries.at(1).find('.voteCount')).to.have.text('1');
  });
});
