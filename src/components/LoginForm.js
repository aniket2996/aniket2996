import React, { Component } from 'react'

class LoginForm extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username: "",
            password: ""
        }
    }


    handleUsername = event => {
        this.setState({
            username: event.target.value
        })
    }

    handlePassword = event => {
        this.setState({
            password: event.target.value
        })
    }

    findUser(tempUser) {

        let userObjects = [
            { userId: "aniket", passkey: "aniket123" },
            { userId: "akash", passkey: "ak123" },
            { userId: "rahul", passkey: "r123" },
            { userId: "vinay", passkey: "vk111" },
        ]

        let findUser = userObjects.find((u) => {
            return u.userId === tempUser
        })

        return findUser

    }


    submitHandler = () => {

        let temp = this.findUser(this.state.username)
        if (temp !== undefined) {
            if (this.state.username === temp.userId && this.state.password === temp.passkey) {
                this.props.loginHandler(true, temp)
            } else {

                this.props.loginHandler(false)
            }
        } else {

            this.props.loginHandler(false)
        }
    }

    render() {

        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                    </div>

                    <div className="col " id="form" >
                        <h2>Login Form </h2>

                        <br />
                        <form onSubmit={this.submitHandler}>
                            <div className="mb-3">
                                <label htmlFor="Username" className="form-label">UserName</label>
                                <input type="text" className="form-control" id="UserName" value={this.state.username} onChange={this.handleUsername} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="Password1" className="form-label">Password</label>
                                <input type="password" className="form-control" id="Password1" value={this.state.password} onChange={this.handlePassword} />
                            </div>

                            <button type="submit" className="btn btn-primary">Submit</button>

                        </form>
                    </div>

                    <div className="col">

                    </div>

                </div>
            </div>
        )
    }
}

export default LoginForm
