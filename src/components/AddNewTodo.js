import React, {useContext, useEffect, useState} from 'react'
import Modal from './Modal'
import TodoForm from './TodoForm'
import { TodoContext } from '../context'
import { calendarItems } from '../constants'
import firebase from '../firebase'
import moment from 'moment'
import randomcolor from 'randomcolor'
import { Button } from 'react-bootstrap'


function AddNewTodo(){
    const { projects, selectedProject } = useContext(TodoContext)
    const [showModal, setShowModal] = useState(false)
    const [text, setText] = useState('')
    const [time, setTime] = useState(new Date())
    const [day, setDay] = useState(new Date())
    const [todoProject, setTodoProject] = useState(selectedProject)

    function handleSubmit(e){
        e.preventDefault()

        if( text && !calendarItems.includes(todoProject)){
            firebase
                .firestore()
                .collection('todos')
                // Add New Todo to the Firebase
                .add(
                    {
                        text : text,
                        date : moment(day).format('MM/DD/YYYY'),
                        day : moment(day).format('d'),
                        time : moment(time).format('hh:mm A'),
                        checked : false,
                        color : randomcolor(),
                        projectName : todoProject
                    }
                )

            setShowModal(false)
            setText('')
            setDay(new Date())
            setTime(new Date())
        }
    }

    useEffect( () => {
        setTodoProject(selectedProject)
    }, [selectedProject])


    return (
        <div className='AddNewTodo'>
         <div className="todobtn">
            <Button variant="secondary" onClick={() => setShowModal(true)}>
            ADD A NEW TASK
            </Button>
         </div>
            <Modal showModal={showModal} setShowModal={setShowModal}>
                <TodoForm handleSubmit={handleSubmit} heading='ADD A NEW TASK'
                    text={text}
                    setText={setText}
                    day={day}
                    setDay={setDay}
                    time={time}
                    setTime={setTime}
                    projects={projects}
                    showButtons={true}
                    setShowModal={setShowModal}
                    todoProject={todoProject}
                    setTodoProject={setTodoProject}
                />
            </Modal>
        </div>
    )
}

export default AddNewTodo