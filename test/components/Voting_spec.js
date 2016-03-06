import React from 'react';
import { shallow } from 'enzyme';
import Voting from '../../src/components/Voting.jsx';
import {expect} from 'chai';


describe('Voting', () => {
    it('displays two buttons', () => {
        const wrapper = shallow(<Voting pair={['Trainspotting', '28 Days Later']} />);
        var buttons = wrapper.find('button');
        expect(buttons).to.have.length(2);
        expect(buttons.at(0).text()).to.equal('Trainspotting');
        expect(buttons.at(1).text()).to.equal('28 Days Later');
    });

    it('invokes callback when a button is clicked', () => {
        let votedWith;
        const vote = (entry) => votedWith = entry;
        const wrapper = shallow(<Voting pair={['Trainspotting', '28 Days Later']} vote={vote} />);

    });
});
