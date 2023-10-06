import React, { Component } from 'react'

class CounterApp extends Component {
    //what is state?
    // state is a javascript object that stores a components
    //  dynamic data and determines component behaviour.

    // -never update the state directly

    constructor() {
        super()
        // this.state = {
        //     counter: 0
        // }
    }

    state = {
        counter : 5
    }

    handleIncrement = () => {
      this.setState({
        counter: this.state.counter + 1
      })
    }

    render() {
        return (
            <div>
                <h2>CounterApp</h2>
                <h4>Count: {this.state.counter}</h4>
                <button className='btn btn-primary me-2'
                onClick={this.handleIncrement}
                >Increment</button>
                <button className='btn btn-danger me-2'>Decrement</button>
                <button className='btn btn-warning me-2'>Reset</button>
            </div>
        )
    }
}

export default CounterApp