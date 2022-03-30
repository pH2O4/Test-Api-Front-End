import { Component, React, useEffect, useState } from "react";
import './Home.css'
import './Users.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { Button } from "react-bootstrap";
import Axios from "axios";

class Users extends Component {

    state = {
        users: [],
    }

    async componentDidMount() {
        const responseUsers = await Axios.get('https://gorest.co.in/public/v2/users', {
            headers: {
                Authorization: 'Bearer ' + localStorage.Token
            }
        })
        this.setState({ users: responseUsers.data })

    }


    render() {


        const { users } = this.state
        console.log(users)
        //using the same Home css
        return (
            <div className="Users">
                <div className="Home">
                    <div className="ConsultUserInfomation">
                        <div>

                        </div>
                    </div>
                    <div className="Divisor">
                    </div>
                    <div className="AllPosts">
                        <h1 className="TitleAllUsers" > <FontAwesomeIcon icon={faUserGroup } /> All Users</h1>
                        <div className="AllUsersFromApi">
                           {users.map(user => (
                            <div key={user.id}>
                                <p> <b>User id:</b> {user.id} <b>Name:</b> {user.name} <b>Email</b> {user.email}  </p>

                            </div>))}   
                        </div>
                      
                    </div>
                </div>
            </div>

        )
    }
}

export default Users