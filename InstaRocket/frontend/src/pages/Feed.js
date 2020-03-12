import React, { Component } from 'react';
import api from '../services/api';
import io from 'socket.io-client';

import './css/Feed.css'

import more from '../assets/more.svg';
import like from '../assets/like.svg';
import liked from '../assets/liked.svg';
import comment from '../assets/comment.svg';
import send from '../assets/send.svg';

class Feed extends Component {
    state = {
        feed: [],
        baseURL: 'http://172.17.187.225:3333',
    };
    

    async componentDidMount(){
        try {
            this.registerToSocket();
            const response = await api.get('posts');
            this.setState({feed: response.data});
        } catch (e) {
            console.error(e);
        }
    }

    registerToSocket = () => {
        const socket = io.connect(this.state.baseURL);
        //console.log(this.state.feed)

        socket.on('post', newPost => {
            this.setState({ feed: [newPost, ...this.state.feed] })
        })

        socket.on('like', likedPost => {
            this.setState({ 
                feed: this.state.feed.map(post =>
                    post._id === likedPost._id ? likedPost : post
                ) 
            })
        })

        socket.on('delete', async deletedPost => {
            const response = await api.get('posts');
            this.setState({feed: response.data});
        })
    }

    handleLike = id => {
        api.post(`/posts/${id}/like`)
    }

    handleMore = id => {
        api.post(`/posts/${id}/delete`)
    }

    render() {
        return (
            <section id="post-list">
                {this.state.feed.map((post) => (
                    <article key={post._id.toString()}>
                    <header>
                        <div className="user-info">
                            <span>{post.author}</span>
                            <span className="place">{post.place}</span>
                        </div>
                        <button type="button" title="Excluir Post" onClick={() =>this.handleMore(post._id)}>
                            <img src={more} alt="Mais"/>
                        </button>
                    </header>

                    <img src={this.state.baseURL + '/files/' + post.image} alt=""/>
                    <footer>
                        <div className="actions">
                            <button type="button" onClick={() =>this.handleLike(post._id)}>
                               <img src={post.likes > 0 ? liked : like} alt=""/>
                            </button>                            
                            <button type="button" onClick={() =>this.handleLike(post._id)}>
                                <img src={comment} alt=""/>
                            </button> 
                            <img src={send} alt=""/>
                        </div>

                        <strong>{post.likes}</strong>

                        <p>
                            {post.description}
                            <span>{post.hashtags}</span>
                        </p>
                        <p id="comments">
                            Ver todos os {post.comments.length !== 0 ? post.comments.length : ''} comentários
                        </p>
                        <div className="comments">
                            {post.comments.map((comment) => (
                                <p key={comment._id}>
                                    <strong>{comment.author}</strong>
                                    {comment.message}
                                </p>
                            ))}
                        </div>
                        <p>
                            {post.createdAt.toString()}
                        </p>
                    </footer>
                </article>
                ))}
            </section>
        )
    }
}

export default Feed;