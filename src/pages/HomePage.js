import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class HomePage extends Component {
    render() {
        return (
            <div>
                <h1>BOOTSTRAP IN REACT</h1>
                <Link to="/firstpage">First Page</Link>
            </div>
        )
    }
}
