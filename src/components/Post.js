import React, { Component } from 'react';
//import { connect } from 'react-redux';
//import { deletePost } from '../actions/postActions';

class Post extends Component {
  
  
  state = {
    post: null
  }
  componentDidMount(){
    //console.log(this.props);
    let id = this.props.match.params.post_id;
    //console.log("id : "+id);
    fetch('https://jsonplaceholder.typicode.com/posts/'+id)
      .then(response=>response.json())
      .then(res => {
        this.setState({
          post: res
        })
        //console.log(res);

      });
  }
  
  render(){
      console.log(this.props);
      const post = this.state.post ? (  
        <div className="post">
          <h4 className="center">{this.state.post.title}</h4> 
          <p>{this.state.post.body}</p>
        </div>
      ) : (
        <div className="center">Loading post...</div>
      );
      return (
        <div className="container">
          {post}
        </div>
      )
    }

}

/*
const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.post_id;
  return {
    post: state.posts.find(post => post.id === id)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deletePost: (id) => { 
      dispatch(deletePost(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);
*/
export default Post;