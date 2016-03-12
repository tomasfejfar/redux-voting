import React from 'react';
import { shallow } from 'enzyme';
import Vote from '../../src/components/Vote';
import { expect } from 'chai';
import sinon from 'sinon';
import { d, dr } from '../../src/d';

const pair = ['Trainspotting', '28 Days Later'];

describe('Vote', () => {
  it('displays two buttons', () => {
    const wrapper = shallow(<Vote pair={pair} />);
    const buttons = wrapper.find('VoteEntry');
    expect(buttons).to.have.length(2);
    expect(buttons.at(0)).to.have.prop('entry', 'Trainspotting');
    expect(buttons.at(1)).to.have.prop('entry', '28 Days Later');
  });

  it('invokes callback when a button is clicked', () => {
    const onVote = sinon.spy();
    const wrapper = shallow(<Vote pair={pair} vote={onVote} />);
    const buttons = wrapper.find('VoteEntry');
    expect(buttons).to.have.length(2);
    expect(buttons.at(0)).to.have.prop('entry', 'Trainspotting');
    expect(buttons.at(1)).to.have.prop('entry', '28 Days Later');
  });
});
