import React from 'react';
import ReactDOM from 'react-dom';
import Voting from './components/Voting';

const pair = ['Trainspotting', 'Brak'];

ReactDOM.render(
    <div>
    <Voting pair={pair} vote={(entry) => {this.props.hasVoted = entry}} hasVoted="Trainspotting"/>
        <Voting pair={pair} winner="Trainspotting"/>
        </div>,
    document.getElementById('app')
);
