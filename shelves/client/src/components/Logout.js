import React from 'react';
import axios from 'axios';
import Nav from './Nav'

function Logout(){
    function handleSubmit(e) {
        axios.get('http://localhost:8000/users/logout')
        .then(res => {
            window.location.href = '/login';

        })
        .catch(error => {
            if (error.res.status===400){
                console.log("Could not log out - check username")
        }})
  }
        return (
           
        <div>
             <Nav />
                <form onSubmit= {handleSubmit}>
                    <button type="submit">Submit</button>
                </form>
        </div>
        )
    }
    export default Logout;
