import React, { Component } from 'react'
import io from "socket.io-client"
const socket = io('http://localhost:8080')

export default class Login extends Component {
    state = {
        userName: ""
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const newUser = e.target.username.value
        this.setState({ userName: newUser})
        console.log(newUser)
    }
    render() {
        return (
            <>
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <input
                        name="username"
                        placeholder="Enter Your Name"
                        type="text"
                    />
                    <input type="submit" value="Login"/>
                </form>
            </>
        )
    }
}
