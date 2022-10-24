import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './style.css';

class Home extends Component {
  state = {
    posts:[]
  }
  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(
      res => {
        console.log(res);
        this.setState({
          posts:res.data.slice(0,10)
        });
      }
    )
  }

  render () {
    const { posts } = this.state
    const postList = posts.length ? (
      posts.map(post => {
        return (
          <div className='post card' key={post.id}>
            <img src='https://images.unsplash.com/photo-1542779283-429940ce8336?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=170&q=80' />
            <div className='card-content'>
              <Link to={'//' + post.id}/>
              <span className='card-title red-text'>{post.title}</span>
              <p>{post.body}</p>
            </div>
          </div>
        )
      })
    ) : (
      <div className='center' >No post to show </div>
    )
    return (
      <div>
        <div className='home container'>
          <h4 className='center'>Home</h4>
          <p>{postList}</p>
        </div>
      </div>
    )
  }
}

export default Home