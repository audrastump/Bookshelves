import React from "react";
import Card from '../ui/Card';
import classes from './Books.module.css'
//displays all the lists in react
export default function ListTimeline(props){
    const displayLists = (props) =>{
        
        const {lists} = props;
        if (lists.length > 0){
            return(
               lists.map((list, index) =>{
                return(
                    
                    <div className = 'classes.book' key = {list._id}>
                        <Card>
                            <h1>{list.name}</h1>
                            <img 
                                src = {list.image}
                                alt = "new"
                         />
                            <h3>{list.description}</h3>
                            <h3>{list.books}</h3>
                        </Card>
                    </div>
                )}
            ))
        }else{
            return(<h3>No lists yet</h3>)
        }
    }
    return(
        <>
            <div className = {classes.book}>
                <h3>My Lists</h3>
            </div>
             {displayLists(props)}
           
        </>
    )
}

