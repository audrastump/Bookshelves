import classes from './ListItem.module.css';
import Card from '../ui/Card';
function ListItem(props){
    return (
        <li className = {classes.item}>
            <Card>
            <div className = {classes.image}>
                <img src = {props.image} alt = {props.title} />
            </div>
            <div className = {classes.content}>
                <h3>{props.title}</h3>
                <p>{props.description}</p>
            </div>
            <div className = {classes.actions}>
                <button>To Favorites</button>
            </div>
            </Card>
        </li>
    );
}
export default ListItem;