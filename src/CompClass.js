import { Component } from "react";

class CompClass extends Component {
    constructor(props){
        super(props)
    }
    
    render() {
        return (
            <div>
                <h2>compClass</h2>
                <h4>Course Name: {this.props.courseName} and duration is {this.props.courseDuration}</h4>
            </div>
        )
    }
}

export default CompClass