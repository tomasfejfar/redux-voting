import React from 'react';
import { shallow } from 'enzyme';
import VoteEntry from '../../src/components/VoteEntry.jsx';
import { expect } from 'chai';
import sinon from 'sinon';
import { d, dr } from '../../src/d';

const entry = 'Trainspotting';

describe('VoteEntry', () => {
  it('displays a button', () => {
  });

  it('calls callback when button is clicked', () => {
    const onVote = sinon.spy();
    const wrapper = shallow(<VoteEntry entry={entry} vote={onVote} />);
    wrapper.find('button').first().simulate('click');
    expect(onVote.calledOnce).to.equal(true);
    expect(onVote.getCall(0).args).to.deep.equal([entry]);
  });

  describe('when voted', () => {
    it('displays voted item', () => {
      const wrapper = shallow(<VoteEntry entry={entry} hasVoted />);
      const button = wrapper.find('button');
      expect(button.find('div').text()).to.equal('Voted');
    });
    it('disables buttons', () => {
      const wrapper = shallow(<VoteEntry entry={entry} hasVoted="Trainspotting" />);
      expect(wrapper).to.be.disabled();
    });
  });
});
