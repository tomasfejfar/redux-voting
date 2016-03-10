import React from 'react';
import { shallow } from 'enzyme';
import Vote from '../../src/components/Vote.jsx';
import {expect} from 'chai';
import sinon from 'sinon';
import {d, dr} from '../../src/d';

let pair = ['Trainspotting', '28 Days Later'];

describe('Vote', () => {
    it('displays two buttons', () => {
        const wrapper = shallow(<Vote pair={pair} />);
        var buttons = wrapper.find('button');
        expect(buttons).to.have.length(2);
        expect(buttons.at(0).text()).to.equal('Trainspotting');
        expect(buttons.at(1).text()).to.equal('28 Days Later');
    });

    it('invokes callback when a button is clicked', () => {
        const onVote = sinon.spy();
        const wrapper = shallow(<Vote pair={pair} vote={onVote} />);
        wrapper.find('button').first().simulate('click');
        expect(onVote.calledOnce).to.equal(true);
        expect(onVote.getCall(0).args).to.deep.equal(['Trainspotting']);
    });

    describe('when voted', () => {
        it('displays voted item', () => {
            const wrapper = shallow(<Vote pair={pair} hasVoted="Trainspotting"/>);
            const button = wrapper.find('button').first();
            expect(button.find('div').text()).to.equal('Voted');
        });
        it('disables buttons', () => {
            const wrapper = shallow(<Vote pair={pair} hasVoted="Trainspotting"/>);
            const button = wrapper.find('button');
            expect(button.everyWhere(n => n.prop('disabled'))).to.equal(true);
        });
    });
});
