import React, { Component } from 'react';

class Class extends Component {
    constructor(){
        super();
        this.state = {
            name: "Class"
        }
    }
    render() { 
        return (
            <>
            <h2>Class Component</h2>
            <h2>{this.state.name}</h2>
            </>
        );
    }
}
 
export default Class;