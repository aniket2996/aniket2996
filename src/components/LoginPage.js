import React, { Component } from 'react'
import LoginForm from './LoginForm'


class LoginPage extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: false,
            user:""
        }

        this.loginHandler = this.loginHandler.bind(this)
    }

    loginHandler=(status,user) =>{

        if (status) {
            this.setState({ isLoggedIn: status })
            this.setState({ user: user.userId })

        } else {
            alert("Please enter the Correct Details")
            this.setState({ isLoggedIn: status })
        }
    }

    logoutHandler=()=>{

        this.setState({ isLoggedIn:!this.state.isLoggedIn })

    }

    render() {
        
        // if (this.state.isLoggedIn) {
        //     return<div><LoginForm /></div>

        // } else {
        //     return <div> <h1>Welcome </h1></div>
        // }

        return this.state.isLoggedIn ?
            <div>
                <h1>Welcome {this.state.user} </h1>
                <div><button onClick={this.logoutHandler}>Logout</button></div>
            </div> :
            <div>
                <LoginForm loginHandler={this.loginHandler} />
            </div>
    }
}

export default LoginPage
