import classes from './ListList.module.css'
import ListItem from './ListItem'
function ListList(props){
    return (
        <ul className = {classes.list}>
            {props.lists.map((list => 
                <ListItem 
                    key = {list.id} 
                    id = {list.id} 
                    image = {list.image} 
                    title = {list.title}
                    description = {list.description}
                />
            ))}
        </ul>
    );
}
export default ListList;