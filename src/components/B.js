import React, {Component} from 'react';
import socketIOClient from "socket.io-client";

class B extends Component {
    constructor(props) {
        super(props);
        this.state = {
            endpoint: "http://localhost:9092",
            data: null
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

    }

    componentDidMount() {
        const {endpoint} = this.state;

        const socket = socketIOClient(endpoint);
        socket.on('SIMPLE_UPDATE', (data) => {
            console.log(data);
            this.setState({...this.state, data: data})
        })
    }

    render() {
        return (
            <div>
                <h1>B Component</h1>
                <h4>Simple Component</h4>
                {this.state.data}
            </div>
        );
    }
}

export default B;