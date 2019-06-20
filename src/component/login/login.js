import React, { Component } from 'react';
import "./login.css";
import { Redirect } from "react-router-dom";

class login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            Redirect: false
        }
    }
    handleChange = (e) => {
        
        let target = e.target;
        let name = target.name;
        let value = target.value;
        this.setState({
            [name]: value
        })
    }
    handleSubmit = () => {
        const username = this.state.username;
        const password = this.state.password;
        fetch('http://192.168.1.5:3000/api/Users/login', {
            method: "POST",
            body: JSON.stringify({
                username,
                password
            }),
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })
            .then(res => res.json())
            .then(res => {
                localStorage.setItem("token",res.id);
                this.setState({
                    Redirect: true
                })
            })
            .catch(err => console.log(err))
    } 
    render() {
        if(localStorage.getItem("token")!=="undefined")
        if( this.state.Redirect){
           return <Redirect to="/"/>
        }
        return (
            <div className="Login">
                <div className="wrap-login">
                    
                    <div onChange={this.handleChange} >
                        <div className="input">
                            <div> Username: </div>
                            <input name="username" type="text" placeholder="Enter your user name..." />
                        </div>
                        <div className="input">
                            <div> Password: </div>
                            <input name="password" type="password" placeholder="Enter your Password..." />
                        </div>
                        <div><input className="submit" onClick={this.handleSubmit} type="button" value="LOGIN" /></div>
                        <div><a href="fogot">fogot password !</a></div>
                    </div>
                </div>

            </div>
        );
    }
}
export default login;