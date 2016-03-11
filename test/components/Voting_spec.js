import React from 'react';
import { shallow } from 'enzyme';
import Voting from '../../src/components/Voting.jsx';
import { expect } from 'chai';
import { d, dr } from '../../src/d';

const pair = ['Trainspotting', '28 Days Later'];

describe('Voting', () => {
  it('displays two buttons', () => {
    const wrapper = shallow(<Voting pair={pair} />);
    const vote = wrapper.find('Vote');
    expect(vote).to.have.prop('pair', pair);
  });

  it('invokes callback when a button is clicked', () => {
    const onVote = function () {
    };
    const wrapper = shallow(<Voting pair={pair} vote={onVote} />);
    const vote = wrapper.find('Vote');
    expect(vote).to.have.prop('pair', pair);
    expect(vote).to.have.prop('vote', onVote);
  });

  describe('when voted', () => {
    it('displays voted item', () => {
      const selectedVote = 'Trainspotting';
      const wrapper = shallow(<Voting pair={pair} hasVoted={selectedVote} />);
      const vote = wrapper.find('Vote');
      expect(vote).to.have.prop('pair', pair);
      expect(vote).to.have.prop('hasVoted', selectedVote);
    });
  });

  it('displays winner', () => {
    const wrapper = shallow(<Voting pair={pair} winner="Trainspotting" />);
    const winner = wrapper.find('Winner');
    expect(winner).to.have.prop('winner', 'Trainspotting');
  });
});
