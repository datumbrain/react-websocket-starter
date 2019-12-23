import React, {Component} from 'react';
import socketIOClient from "socket.io-client";


class A extends Component {

    constructor(props) {
        super(props);
        this.state = {
            endpoint: "http://localhost:9092",
            data: null
        }
    }

    componentDidMount() {
        const {endpoint} = this.state;

        const socket = socketIOClient(endpoint);
        socket.on('AG_GRID_UPDATE', data => {
            this.setState({...this.state, data: data})
        })
    }

    render() {
        return (
            <div>
                <h1>A component</h1>

                <h4>AgGrid Component</h4>
                {this.state.data}
            </div>
        );
    }
}

export default A;