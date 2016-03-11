import React from 'react';
import { shallow } from 'enzyme';
import Results from '../../src/components/Results.jsx';
import { expect } from 'chai';
import { List, Map } from 'immutable';
import { d, dr } from '../../src/d';

const pair = List.of('Trainspotting', '28 Days Later');
const tally = new Map({ 'Trainspotting': 3, '28 Days Later': 1 });

describe('Results', () => {
    it('display entries with tally results', () => {
        const wrapper = shallow(<Results pair={pair} tally={tally}/>);
        const winner = wrapper.find('div.entry');
        expect(winner.length).to.eq(2);
        expect(winner.first().find())
    });
});
