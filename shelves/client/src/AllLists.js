
import axios from "axios";
import React from "react";
import { useState, useEffect } from 'react'
import ListTimeline from "./components/ListTimeline";
import Nav from "./components/Nav";
//returns all of a users lists
function AllListsPage(){
const [lists, getLists] = useState('');
    
    axios.get('http://localhost:8000/users/isAuth')
      .then(res => {
       
        let username = res.data.username;
        
        getAllLists(username);
        
      });
    //if (typeof "audra" !== "undefined"){
      useEffect(() => {
        getAllLists();
   }, []);
      const getAllLists = (props) =>{
     
          axios.get('http://localhost:8000/lists', 
          {
            params: {
              username: props
            }
          })
          .then(function (response) {
            const allLists = response.data;
            
            getLists(allLists);
           
          })
        
        }

  

    return (
    <div>
        <Nav />
        <ListTimeline lists = {lists} />
    </div>
    
      
    );
}
export default AllListsPage;