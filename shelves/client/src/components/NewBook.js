import React, { Component } from 'react';
import axios from 'axios';
import Nav from './Nav'
export default class NewBook extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
   
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '',
      name: '',
      users: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:8000/books/')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            users: response.data.map(user => user.username),
            username: response.data[0].username
          })
        }
      })
      .catch((error) => {
        console.log(error);
      })

  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    })
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value
    })
  }

  
  onSubmit(e) {
    e.preventDefault();

    const book = {
      username: this.state.username,
      name: this.state.name,
      
    }

    console.log(book);

    axios.post('http://localhost:8000/books/add', book)
      .then(res => console.log(res.data));

    window.location = '/';
  }

  render() {
    return (
    <div>
      <Nav />
      <h3>Add new book</h3>
      <form onSubmit={this.onSubmit}>
        
        <div className="form-group"> 
         
          <div className="form-group"> 
          <label>Name: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.name}
              onChange={this.onChangeName}
              />
        </div>
        </div>
        <div className="form-group">
          <input type="submit" value="Create Book Log" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}