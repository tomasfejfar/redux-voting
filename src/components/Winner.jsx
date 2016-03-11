import React from "react";
import PureRenderMixin from 'react-addons-pure-render-mixin';


class Winner extends React.Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return <div className="winner" rel="winner">The winner is {this.props.winner}</div>
    }
}

export default Winner;
