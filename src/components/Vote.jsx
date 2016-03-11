import React from "react";
import PureRenderMixin from 'react-addons-pure-render-mixin';

class Vote extends React.Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    isDisabled() {
        return !!this.props.hasVoted;
    }
    getPair() {
        return this.props.pair || [];
    }
    isVotedFor(entry) {
        return this.props.hasVoted == entry;
    }
    render() {
        return <div className="voting">
            {this.getPair().map(entry =>
                <button key={entry}
                        disabled={this.isDisabled()}
                        onClick={() => this.props.vote(entry)}>
                    <h1>{entry}</h1>
                    {this.isVotedFor(entry) ?
                        <div className="label">Voted</div> :
                        null}
                </button>
            )}
        </div>;
    }
}

export default Vote;
