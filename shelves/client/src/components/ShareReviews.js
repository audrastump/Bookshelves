// import React, { Component, useEffect, useState } from 'react';
// import axios from 'axios';

// import Nav from './Nav'
// import ReviewTimeline from './ReviewTimeline';
//  var data;
// export default function ShareReview (){
//   const [state, setState] = useState({
//     username: "",
//     reviews: "",
//   });

//   const onChangeUsername= (e) =>{
//     this.setState({
//       username: e.target.value
//     })
//   }

 
//   const onSubmit = (e) =>{
//     e.preventDefault();
//     const username = this.state.username;
//     axios.get('http://localhost:8000/reviews', 
//     {
//       params: {
//         username: username
//       }
//   })
// .then(res => {
//   console.log(res.data);
//   this.setState({ 
//       reviews: res.data,
//     })
//     console.log(data);
//   }

    
//      console.log(this.state.reviews);
//     //  console.log(this.state.loading)
//     //  console.log(data);
// }
  
//     return (
//             <div>
//             <Nav />
//             <h3>Friend's Review List</h3>
//             <form onSubmit={onSubmit}>
                
//                 <div className="form-group"> 
                
//                 <div className="form-group"> 
//                 <label>Username: </label>
//                 <input  type="text"
//                     required
//                     className="form-control"
//                     value={state.username}
//                     onChange={e => setState({ username: e.target.value })}
//                     />
//                 </div>
//                 </div>
//                 <div className="form-group">
//                 <input type="submit" value="Find" className="btn btn-primary" />
//                 </div>
//             </form>
            
            
        
//             </div>
//     )
//   }
