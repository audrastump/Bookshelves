import Card from '../ui/Card';
import React, { Component } from 'react';
import axios from 'axios';

import Nav from './Nav'
export default class NewListPage extends Component {
    constructor(props) {
        super(props);
        
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeImage = this.onChangeImage.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
      
          image: '',
          users: [],
          description: '',
          name: ''
        }
      }
    
     
      onChangeImage(e) {
        this.setState({
          image: e.target.value
        })
      }
      onChangeDescription(e) {
        this.setState({
          description: e.target.value
        })
      }
      onChangeName(e) {
        this.setState({
          name: e.target.value
        })
      }
      onSubmit(e) {
        e.preventDefault();
        const list = {
          username: "hi",
          image: this.state.image,
          description: this.state.description,
          name: this.state.name,
        }
        axios.post('http://localhost:8000/lists/add', list)
            .then(res => console.log(res.data));
            window.location = '/';

      }
      render(){
        return (
            <Card>
     <Nav />
     <form onSubmit={this.onSubmit}>
        
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
          <label>Image: </label>
          <input  type="url"
              required
              className="form-control"
              value={this.state.image}
              onChange={this.onChangeImage}
              />
        </div>
        <div className="form-group"> 
          <label>Description: </label>
          <input  type="textarea"
              required
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
              />
        </div>
        <div className="form-group">
          <input type="submit" value="Create List " className="btn btn-primary" />
        </div>
      </form>
            </Card> 
         );
     }
         
     
      }
    