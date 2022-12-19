import React, { Component } from 'react';
import axios from 'axios';
import Nav from './Nav'
export default class AddToList extends Component {
  constructor(props) {
    super(props);
    
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeList = this.onChangeList.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '',
      name: '',
      list:'',
      users: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:8000/lists/')
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

  onChangeName(e) {
    this.setState({
      name: e.target.value
    })
  }
  onChangeList(e) {
    this.setState({
      list: e.target.value
    })
  }
  
  onSubmit(e) {
    e.preventDefault();
    const bookName = this.state.name
    const list = this.state.list
    console.log(bookName);
    console.log(list);

    axios.post('http://localhost:8000/lists/update', 
    {
        bookName: bookName,
        list: list
    })
      .then(res => console.log(res.data));
        window.location = '/';
  }

  render() {
    return (
    <div>
      <Nav />
      <h3>Add new book to a list</h3>
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
        <div className="form-group"> 
          <label>List: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.list}
              onChange={this.onChangeList}
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