import React, { Component } from 'react'

export default class FirstPage extends Component {
    render() {
        return (
            <div>
                <div className="container bg-primary text-white p-3">
                    <h1>container</h1>
                </div>
                <div className="container-fluid bg-dark text-white p-3">
                    <h1>container-fluid</h1>
                </div>
                <div className="container-sm bg-primary text-white p-3">container-sm - 100% wide until small breakpoint</div>
                <div className="container-md bg-dark text-white p-3">container-md - 100% wide until medium breakpoint</div>
                <div className="container-lg bg-primary text-white p-3">container-lg - 100% wide until large breakpoint</div>
                <div className="container-xl bg-dark text-white p-3">container-xl - 100% wide until extra large breakpoint</div>
            </div>
        )
    }
}
