import React, { Component } from 'react';
import axios from 'axios';

import Nav from './Nav'
import ListTimeline from './ListTimeline';
export default class ShareList extends Component {
   
  constructor(props) {
    super(props);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      username: '',
      lists: '',
      loading: '',

    }
  }

 

  

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    })
  }

 

  
  onSubmit(e) {
    this.setState({
        loading: true,
      })
      console.log(this.state.loading);
    e.preventDefault();
    this.getAllLists(this.state.username);
    
    
  }
  getAllLists = (props) =>{
    axios.get('http://localhost:8000/lists/get', 
          {
            params: {
              username: props
            }
        })
      .then(res => {
        this.setState({
            lists: res.data,
            loading: false,
          })
       
    })
}
  
  render() {
    if (this.state.loading ===true){
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
            </div>
        ) }
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

            
            <ListTimeline lists = {this.state.lists} />
            </div>
    )
  }
}