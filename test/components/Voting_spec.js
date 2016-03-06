import React from 'react';
import { shallow } from 'enzyme';
import Voting from '../../src/components/Voting.jsx';
import {expect} from 'chai';


describe('Voting', () => {
    it('displays two buttons', () => {
        const wrapper = shallow(<Voting pair={["Trainspotting", "28 Days Later"]} />);
        expect(wrapper.find('button')).to.have.length(2);
    });
});
