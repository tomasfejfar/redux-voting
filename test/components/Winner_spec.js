import React from 'react';
import { shallow } from 'enzyme';
import Winner from '../../src/components/Winner.jsx';
import {expect} from 'chai';
import {d, dr} from '../../src/d';

describe('Winner', () => {
    it('displays winning entry', () => {
        const wrapper = shallow(<Winner winner="Trainspotting" />);
        const winner = wrapper.find('div.winner');
        expect(winner).to.have.text('The winner is Trainspotting');
    });
});
