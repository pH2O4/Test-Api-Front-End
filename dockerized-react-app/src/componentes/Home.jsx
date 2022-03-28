import React from "react";
import './Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserGroup, faSignsPost } from '@fortawesome/free-solid-svg-icons'
import { Button } from "react-bootstrap";
import Axios from "axios";

const Home = () => {

    window.onload = () => {
        Axios.get('https://gorest.co.in/public/v2/posts', {

            headers: {
                Authorization: 'Bearer ' + localStorage.Token
            }
        }).then((response) => {
console.log(response.data)
const PostsDatas = response.data
if(PostsDatas){
for (let i = 0; i < PostsDatas.length; i++) {
const CurtingDatas = PostsDatas[i]
document.getElementById("RecivingContent").insertAdjacentHTML('beforeend',
`<div>
User_id: ${CurtingDatas.user_id}
<p> <b> Title: ${CurtingDatas.title} </b> <p/>
${CurtingDatas.body} <br/>
<button id="ButtonsComents" OnClick={AddComentInThisPost} > + AddComment</button>
 </div> `)
}

}})}

    return (
        <div className="Home">
            <div className="ConsultUserInfomation">
                <div className="UserButoons">
                    <Button variant="light"><FontAwesomeIcon icon={faUserGroup} /> See All Users</Button>
                </div>
            </div>
            <div className="Divisor">
            </div>
            <div className="AllPosts">
                <div className="TITLE">
                    <FontAwesomeIcon icon={faSignsPost} /> All Posts
                </div>
                <div id="RecivingContent" className="RecivingSomePostsFor1°Coment">

                </div>
            </div>

        </div>
    )
}

export default Home