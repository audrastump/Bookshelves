import React, { Component, useEffect, useState } from 'react';
import axios from 'axios';

import Nav from './Nav'
import BookTimeline from './BookTimeline';
export default class ShareBook extends Component {
   
  constructor(props) {
    super(props);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      username: '',
      books: ''

    }
  }

 

  getAllBooks = (props) =>{
    axios.get('http://localhost:8000/books/favorites', {
        params: {
            username: this.state.username
          }
    })
      .then(res => {
        console.log("line 27" + res.data);
        if (res.data.length > 0) {
            this.setState({
              books: res.data,
            })
      }
    })
}
  

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    })
  }

 

  
  onSubmit(e) {
    e.preventDefault();
    console.log("line 49");
    const friend = {
      username: this.state.username,
      
    }

    console.log(friend);
    this.getAllBooks(this.state.username);
    
    
  }

  render() {
    return (
    <div>
      <Nav />
      <h3>Friend's Book List</h3>
      <form onSubmit={this.onSubmit}>
        
        <div className="form-group"> 
         
          <div className="form-group"> 
          <label>Username: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}
              />
        </div>
        </div>
        <div className="form-group">
          <input type="submit" value="Find" className="btn btn-primary" />
        </div>
      </form>
      <BookTimeline books = {this.state.books} />
      
    </div>
    )
  }
}