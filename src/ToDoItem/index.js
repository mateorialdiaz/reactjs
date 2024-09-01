import './ToDoItem.css';
import {CompleteIcon} from '../TodoIcon/CompleteIcon'
import {DeleteIcon} from '../TodoIcon/DeleteIcon'

function ToDoItem(props) {
    return (
        <li className="TodoItem">
            <CompleteIcon completed={props.completed} 
            onComplete={props.onComplete}

            />
 
              


          {/*  <span className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}  onClick={props.onComplete}   >  
                ✓
            </span>    */}



            <p className={`TodoItem-p ${props.completed && "TodoItem-p--completed"} `}>
                {props.text}
            </p>

            <DeleteIcon
            onDelete={props.onDelete}

            />
             {/*<span className="Icon Icon-delete"  onClick={props.onDelete}  >
                ✗
            </span>  */}
        </li>
    );
}

export { ToDoItem };
