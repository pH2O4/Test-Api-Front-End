import { Component, React, useEffect, useState } from "react";
import './Home.css'
import './Users.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { } from '@fortawesome/free-solid-svg-icons'
import { Button } from "react-bootstrap";
import Axios from "axios";

class Users extends Component {

    state = {
        users: [],
    }

    async componentDidMount() {
        const responseUsers = await Axios.get('https://gorest.co.in/public/v2/users',{
            headers: {
                Authorization: 'Bearer ' + localStorage.Token
            }
        })
        this.setState({ users: responseUsers.data })

    }


    render() {
     

        const { users } = this.state

        return (
            <div className="Users">
            <div className="Home">
                <div className="ConsultUserInfomation">
                    f
                </div>
                <div className="Divisor">
                </div>
                <div className="AllPosts">
                   f
                </div>
            </div>
            </div>

        )
    }
}

export default Users