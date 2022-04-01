import { Component, React, useEffect, useState } from "react";
import './Home.css'
import './Users.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserGroup, faUserCheck } from '@fortawesome/free-solid-svg-icons'
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

        const id = localStorage.idUser
        const Name = localStorage.NameUser
        const Email = localStorage.EmailUser
        const Gender = localStorage.GenderUser

        const { users } = this.state
        console.log(users)
        //using the same Home css
        return (
            <div className="Users">
                <div className="Home">
                    <div className="ConsultUserInfomation">
                        <div className="Userdata">
                            <p> <b>{<FontAwesomeIcon icon={faUserCheck} />} Your Informations:</b></p>
                            <p>  <b>UserId:</b> {id} <br /> <b>Name:</b> {`${Name}`} <br /> <b>Email:</b> {Email} <br /> <b>Gender:</b> {Gender} </p>
                        </div>
                    </div>
                    <div className="Divisor">
                    </div>
                    <div className="AllPosts">
                        <h1 className="TitleAllUsers" > <FontAwesomeIcon icon={faUserGroup} /> All Users</h1>
                        <div className="AllUsersFromApi">
                            {users.map(user => (
                                <div key={user.id}>
                                    <p> <b>UserId:</b> {user.id} <b>Name:</b> {user.name} <b>Email</b> {user.email} <br />
                                        <b> Gender:</b> {user.gender} <b>Status:</b> {user.status} </p>

                                </div>))}
                        </div>

                    </div>
                </div>
            </div>

        )
    }
}

export default Users