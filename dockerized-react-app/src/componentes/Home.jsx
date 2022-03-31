import { Component, React, useEffect, useState } from "react";
import './Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserGroup, faSignsPost, faComments, faMessage, faPlusCircle, faDeleteLeft } from '@fortawesome/free-solid-svg-icons'
import { Button, Form, Row, Col } from "react-bootstrap";
import Axios from "axios";
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
        const TokenR = '84c18a85c47fea702efff55f579b9f0b537b82e29649d638fbbc9b6841556723'

        const DeletingComent = (comentid) => {
            console.log(comentid)
        }

        const ShowPostComents = (postId) => {
            let div = document.getElementsByClassName(postId);
            let TrueDiv = div[0]
            if (TrueDiv.style.display === "none") {
                TrueDiv.style.display = "block";
            } else {
                TrueDiv.style.display = "none";
            }
        }
        const PostComents = (postId) => {
            const inputValue = document.getElementById(postId).value
            Axios.post(`https://gorest.co.in/public/v2/posts/${postId}/comments`, {
                name: localStorage.NameUser,
                email: localStorage.EmailUser,
                body: inputValue},{
                    headers:{
                        Authorization: 'Bearer ' + TokenR
                }
            }).then((response) => {
                const ClearTextArea = document.getElementById(postId).value = ""
                const i = document.getElementsByClassName(postId)
                window.location.reload()
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

                                    </div>
                                    <div className={post.id} id="CommentsSpace">

                                        {comments.map(coment =>
                                            post.id == coment.post_id &&
                                            <div key={coment.id}>
                                                <p> <b>{coment.name}:</b>  {coment.body} {coment.email == localStorage.EmailUser && <button className="ButtonForDeleteComent" onClick={() => DeletingComent(coment.id)} > <FontAwesomeIcon icon={faDeleteLeft} /> </button> } </p> 

                                            </div>

                                        )}
                                    </div>
                                    <Form>
                                        <Row>
                                            <Col>
                                                <textarea id={post.id} className="ComentPerson" placeholder="Type Your Comment" />
                                            </Col>
                                        </Row>
                                    </Form>
                                    <button onClick={() => PostComents(post.id)} className="ButtonsComents"><FontAwesomeIcon icon={faPlusCircle} /> Add Coment</button>

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