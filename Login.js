import React, { Component } from 'react'

export default class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
        }
    }
    render() {
        const {email ,password} = this.state
       
        return (
            <>
            <form onSubmit={this.onSubmit}>
               <h2>Log in</h2>
            <div className='email'>
               <p className='email-name'>Email</p>
               <p className='email-ac'>Need an account? <button>Sign up</button></p>
            </div>
            <div>
                <input type="email" value={email} onChange={e=>this.setState({email: e.target.value})}/>
            </div>
            <div>
                <input type="password" value={password} onChange={e=>this.setState({password: e.target.value})}/>
            </div>
            <div>
                <button type="submit">Log in</button>
            </div>
            <button>Forgot password</button>
            </form>
            <button>Help</button>
            </>
        )
    }
}
