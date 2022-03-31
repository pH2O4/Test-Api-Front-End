import { Component, React, useEffect, useState } from "react";
import './Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserGroup, faSignsPost, faComments, faMessage } from '@fortawesome/free-solid-svg-icons'
import { Button } from "react-bootstrap";
import Axios from "axios";
import { post } from "jquery";

class Home extends Component {

    state = {
        posts: [],
        comments: [],
    }

    async componentDidMount() {
        const responsePosts = await Axios.get('https://gorest.co.in/public/v2/posts', {
            headers: {
                Authorization: 'Bearer ' + localStorage.Token
            }
        })
        this.setState({ posts: responsePosts.data })

        const responseComents = await Axios.get('https://gorest.co.in/public/v2/comments', {
            headers: {
                Authorization: 'Bearer ' + localStorage.Token
            }
        })
        this.setState({ comments: responseComents.data })
    }


    render() {
        const ShowPostComents = (postId) => { 
            console.log(postId)
            let div = document.getElementsByClassName(postId);
            let TrueDiv = div[0]
            if (TrueDiv.style.display === "none") {
                TrueDiv.style.display = "block";
            } else {
                TrueDiv.style.display = "none";
            }
        }
        const PostComents = (postId) => {
            console.log(postId)
            Axios.post(`/public/v2/posts/${postId}/comments`, {

            })
        }
        const { posts, comments } = this.state
        return (
            <div className="Home">
                <div className="ConsultUserInfomation">
                    <div className="UserButoons">
                        <Button href="/Users" variant="light"><FontAwesomeIcon icon={faUserGroup} /> See All Users</Button>
                    </div>
                </div>
                <div className="Divisor">
                </div>
                <div className="AllPosts">
                    <div className="TITLE">
                        <FontAwesomeIcon icon={faSignsPost} /> All Posts
                    </div>
                    <div id="RecivingContent" className="RecivingSomePostsFor1°Coment">
                        <div>
                            {posts.map(post => (
                                <div key={post.id}>
                                    <p> <b>User id: {post.user_id}</b>  </p>
                                    <p> <b>Título: {post.title}</b>  </p>
                                    <p> {post.body}  </p>
                                    <div> <button onClick={() => ShowPostComents(post.id)} className="ButtonsComents"><FontAwesomeIcon icon={faComments} /> Show Comments </button>
                                    
                                        <button onClick={() => PostComents(post.id)} className="ButtonsComents"><FontAwesomeIcon icon={faMessage} /> Add Coments</button> </div>
                                    <div className={post.id} id="CommentsSpace">

                                        {comments.map(coment =>
                                            post.id == coment.post_id &&
                                            <div key={coment.id}>
                                                <p> <b>{coment.name}:</b>  {coment.body} </p>
                                            </div>
                                            
                                        )}
                                    </div>


                                </div>

                            ))}

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Home