import React, {useContext, useState} from 'react'
import { ArrowClockwise, CheckCircleFill, Circle, Trash, Pencil } from 'react-bootstrap-icons'
import firebase from '../firebase'
import { TodoContext } from '../context';

function Todo({todo}){
    const [hover, setHover] = useState(false);
    const { selectedTodo, setSelectedTodo} = useContext(TodoContext);
    const checkTodo = todo => {
        firebase
            .firestore()
            .collection('todos')
            .doc(todo.id)
            .update({
                checked : !todo.checked
            })
    }
    const deleteTodo = todo => {
        firebase
            .firestore()
            .collection('todos')
            .doc(todo.id)
            .delete()
    }
    const handleDelete = todo => {
        deleteTodo(todo)

        if(selectedTodo === todo){
            setSelectedTodo(undefined)
        }
    }

    return (
        <div className='Todo'>
            <div
                className="todo-container"
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            >
                <div className="check-todo" onClick={ () => checkTodo(todo)}>
                    {
                        todo.checked ?
                        <span className="checked">
                            <CheckCircleFill color="#bebebe" />
                        </span>
                        :
                        <span className="unchecked">
                            <Circle color={todo.color} />
                        </span>
                    }
                </div>
                <div className="text">
                    <p style={{color : todo.checked ? '#bebebe' : '#000000'}}>{todo.text}</p>
                    <span>{todo.time} - {todo.projectName} ✦ {todo.date} ✦</span>
                    <div className={`line ${todo.checked ? 'line-through' : ''}`}></div>
                </div>
                <div className="edit-todo" onClick={ () => setSelectedTodo(todo)}>
                    {
                        (hover || todo.checked) &&
                        <span className="editicon"> <Pencil />
                        </span>
                    }
                </div>
                <div className="delete-todo" onClick={ () => handleDelete(todo)}>
                    {
                        (hover || todo.checked) &&
                        <span><Trash /></span>
                    }
                </div>
            </div>
        </div>
    )
}

export default Todo