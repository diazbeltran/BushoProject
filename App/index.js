import React, { Component } from 'react'

const StartNavigator = require('./routes/routes.js').default;

export default class Index extends Component {

    constructor(props) {
        super(props);
    }
    
    render() {
        return (

              
             <StartNavigator />
        )
    }
}
