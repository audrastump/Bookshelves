import Card from '../ui/Card';
import React, { Component } from 'react';
import axios from 'axios';

import Nav from './Nav'
//allows the user to create a review
export default class NewReviewPage extends Component {
    constructor(props) {
        super(props);
        this.onChangeBookName = this.onChangeBookName.bind(this);
        this.onChangeBookDescription = this.onChangeBookDescription.bind(this);
        this.onChangeBookReview = this.onChangeBookReview.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
      
          bookName: '',
          bookDescription: [],
          bookReview: '',
        
        }
      }
    
      onChangeBookName(e) {
        this.setState({
          bookName: e.target.value
        })
      }
      onChangeBookDescription(e) {
        this.setState({
          bookDescription: e.target.value
        })
      }
      onChangeBookReview(e) {
        this.setState({
          bookReview: e.target.value
        })
      }
      onSubmit(e) {
        e.preventDefault();
        const review = {
          bookName: this.state.bookName,
          bookDescription: this.state.bookDescription,
          bookReview: this.state.bookReview,
        }
        axios.post('http://localhost:8000/reviews/add', review)
            .then(res => console.log(res.data));
            window.location = '/AllReviews';

      }
      render(){
        return (
            <Card>
     <Nav />
     <form onSubmit={this.onSubmit}>
        
        <div className="form-group"> 
          <label>Book Name: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.bookName}
              onChange={this.onChangeBookName}
              />
        </div>
        <div className="form-group"> 
          <label>Book Description: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.bookDescription}
              onChange={this.onChangeBookDescription}
              />
        </div>
        <div className="form-group"> 
          <label>Book Rating : </label>
          <input  type="int"
              required
              className="form-control"
              value={this.state.bookReview}
              onChange={this.onChangeBookReview}
              />
        </div>
        <div className="form-group">
          <input type="submit" value="Create Review " className="btn btn-primary" />
        </div>
      </form>
            </Card> 
         );
     }
         
     
      }