import Card from '../ui/Card';
import classes from './Books.module.css'
//allows the user to display their timeline of reviews
export default function ReviewTimeline(props){
    const displayReviews = (props) =>{
    
        const {reviews} = props;
        if (reviews.length > 0){
            return(
               reviews.map((review, index) =>{
                return(
                    <div className = 'classes.book' key = {review._id}>
                        <Card>
                        <h3>{review.bookName}</h3>
                        <h3>{review.bookDescription}</h3>
                        <h3>{review.bookReview}</h3>
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
                <h3>My Reviews</h3>
            </div>
            
            {displayReviews(props)}
        </>
    )
}

