import React from "react";
import './Home.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUserGroup, faSignsPost} from '@fortawesome/free-solid-svg-icons'
import { Button } from "react-bootstrap";

const Home = () => {

    
    return(
        <div className="Home">
<div className="ConsultUserInfomation">
<div className="UserButoons">
<Button variant="light"><FontAwesomeIcon icon={faUserGroup}/> See All Users</Button>
</div>
</div>
<div className="Divisor">
</div>
<div className="AllPosts">
<div className="TITLE">
<FontAwesomeIcon icon={faSignsPost}/> All Posts 
</div>
</div>

        </div>
    )
}

export default Home