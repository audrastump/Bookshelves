import React from "react";
import Card from '../ui/Card';
import classes from './Books.module.css'
export default function BookTimeline(props){
    //provides a timeline for displaying the books
    const displayBooks = (props) =>{
        console.log(props.book)
        const {books} = props;
        if (books.length > 0){
            return(
               books.map((book, index) =>{
                
                return(
                    <div className = 'classes.book' key = {book._id}>
                        <Card>
                        <h3>{book.name}</h3>
                        </Card>
                    </div>
                )}
            ))
        }else{
            return(<h3>No books yet</h3>)
        }
    }
    return(
        <>
            <div className = {classes.book}>
                <h3>My Read Books</h3>
            </div>
            
            {displayBooks(props)}
        </>
    )
}

