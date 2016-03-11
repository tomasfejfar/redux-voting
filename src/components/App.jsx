import React from 'react';
import {List, Map} from 'immutable';

const pair = List.of('Trainspotting', '28 Days Later');
const tally = new Map({'Trainspotting': 3, '28 Days Later': 1});

export default React.createClass({
    render () {
        console.log(this.props);
        return React.cloneElement(this.props.children, {pair: pair, tally: tally})
    }
});
