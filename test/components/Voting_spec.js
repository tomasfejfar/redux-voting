import React from 'react';
import { shallow } from 'enzyme';
import Voting from '../../src/components/Voting.jsx';
import {expect} from 'chai';
import sinon from 'sinon';


describe('Voting', () => {
    it('displays two buttons', () => {
        const wrapper = shallow(<Voting pair={['Trainspotting', '28 Days Later']} />);
        var buttons = wrapper.find('button');
        expect(buttons).to.have.length(2);
        expect(buttons.at(0).text()).to.equal('Trainspotting');
        expect(buttons.at(1).text()).to.equal('28 Days Later');
    });

    it('invokes callback when a button is clicked', () => {
        const onVote = sinon.spy();
        const wrapper = shallow(<Voting pair={['Trainspotting', '28 Days Later']} vote={onVote} />);
        console.log(wrapper.debug());
        wrapper.find('button').first().simulate('click');
        expect(onVote.calledOnce).to.equal(true);
    });
});
