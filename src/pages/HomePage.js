import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class HomePage extends Component {
    render() {
        return (
            <div>
                <h1>BOOTSTRAP IN REACT</h1>
                <Link to="/firstpage">First Page</Link> <br/>
                <Link to="/examples">Examples</Link> <br/>
                <Link to="/demopage">Full Demo Page</Link>
            </div>
        )
    }
}
