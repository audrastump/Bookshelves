import axios from "axios";
import React from "react";
import { useState, useEffect } from 'react'
import ReviewTimeline from "./ReviewTimeline";
import Nav from "./Nav"
function AllReviewsPage(){

    const [reviews, getReviews] = useState('');
    
    axios.get('http://localhost:8000/users/isAuth', {credentials: "include"})
      .then(res => {
        console.log(res.data);
        let username = res.data.username;
        console.log(username);
        getAllReviews(username);
        
      });
    
      useEffect(() => {
        getAllReviews();
   }, []);

      const getAllReviews = (props) =>{
      
          axios.get('http://localhost:8000/reviews', 
          {
            params: {
              username: props
            }
          })
          .then(function (response) {
            const allReviews = response.data;
            console.log(allReviews);
            getReviews(allReviews);
          })
         // .catch(error => console.error('Error'))
        }
        return (
         <div>
            <Nav />
            <ReviewTimeline reviews = {reviews} />  
         </div>
      );  
    }
    export default AllReviewsPage;
      
      
   // }
   
