import React from 'react';
import { shallow } from 'enzyme';
import ResultEntry from '../../src/components/ResultEntry';
import { expect } from 'chai';

describe('ResultEntry', () => {
  it('display entry with tally results', () => {
    const wrapper = shallow(<ResultEntry entry="Trainspotting" votes="3" />);
    expect(wrapper.find('h1')).to.have.text('Trainspotting');
    expect(wrapper.find('.voteCount')).to.have.text('3');
  });
});
