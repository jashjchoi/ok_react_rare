import React, {useContext, useEffect, useState} from 'react';
import firebase from '../firebase';
import TodoForm from './TodoForm';
import { TodoContext } from '../context';
// import { X } from 'react-bootstrap-icons'
import moment from 'moment';


function EditTodo(){
    const [todoProject, setTodoProject] = useState('')
    const [text, setText] = useState('')
    const [day, setDay] = useState(new Date())
    const [time, setTime] = useState(new Date())
    const { selectedTodo, projects } = useContext(TodoContext);
    
    useEffect(() => {
        if(selectedTodo){
            setText(selectedTodo.text)
            setDay(moment(selectedTodo.date, 'MM/DD/YYYY'))
            setTime(moment(selectedTodo.time, 'hh:mm A'))
            setTodoProject(selectedTodo.projectName)
        }
    }, [selectedTodo])
    useEffect(() => {
        if(selectedTodo){
            firebase 
            //update the firebase with edited data 
                .firestore()
                .collection('todos')
                .doc(selectedTodo.id)
                .update({text,
                    date : moment(day).format('MM/DD/YYYY'),
                    day : moment(day).format('d'),
                    time : moment(time).format('hh:mm A'),
                    projectName : todoProject
                })
        }
    }, [text, day, time, todoProject])
    function handleSubmit(e){

    }
    // const [setShow] = useState(false);
    // const handleClose = () => setShow(false);


    
    return (
        <>
            {selectedTodo &&
            <div className='EditTodo'>
                {/* <div className="cancel" onClick={handleClose}>
                    <X size='30' />
                </div> */}
                <div className="header">Edit My Schedule
                </div>
                <div className="container">
                    <TodoForm
                        handleSubmit={handleSubmit}
                        text={text}
                        setText={setText}
                        day={day}
                        setDay={setDay}
                        time={time}
                        setTime={setTime}
                        projects={projects}
                        todoProject={todoProject}
                        setTodoProject={setTodoProject}
                    />
                </div>
            </div>
        }
        </>
    )
}

export default EditTodo
