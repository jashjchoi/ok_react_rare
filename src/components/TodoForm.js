import React from 'react'
import { CalendarDay, Clock, Tag, X } from 'react-bootstrap-icons'
import { DatePicker, TimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

function TodoForm({
    handleSubmit,
    heading = false,
    text, setText,
    day, setDay, time, setTime,
    projects,
    showButtons = false, setShowModal = false,
    todoProject, setTodoProject,
}){

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <form onSubmit={handleSubmit} className='TodoForm'>
                <div className="text">
                    {
                        heading && 
                        <h3>{heading}</h3>
                    }
                    <input
                        type='text'
                        value={text}
                        onChange={e => setText(e.target.value)}
                        placeholder='Enter a Task here...'
                        autoFocus
                    />
                </div>
                <div className="pick-day">
                    <div className="title">
                        <CalendarDay />
                        <p>Choose a day</p>
                    </div>
                    <DatePicker
                        value={day}
                        onChange={day => setDay(day)}
                    />
                </div>
                <div className="pick-time">
                    <div className="title">
                        <Clock />
                        <p>Choose time</p>
                    </div>
                    <TimePicker
                        value={time}
                        onChange={time => setTime(time)}
                    />
                </div>
                <div className="pick-project">
                <div className="title">
                        <Tag />
                        <p>Choose a Tag</p>
                    </div>
                    <div className="projects">
                        {
                            projects.length > 0 ?
                            projects.map( project => 
                                <div className={`project ${todoProject === project.name ? "active" : ""}`}
                                    onClick={() => setTodoProject(project.name)} key={project.id}
                                >
                                    {project.name}
                                </div>    
                            )
                            :
                            <div style={{color:'#F68712'}}>
                                Please add a Tag First
                            </div>
                        }
                    </div>
                </div>
                {
                    showButtons &&
                    <div>
                        <div className="cancel" onClick={() => setShowModal(false)}>
                            <X size='30' />
                        </div>
                        <div className="confirm">
                            <button>Save</button>
                        </div>
                    </div>
                }
            </form>
        </MuiPickersUtilsProvider>
    )
}

export default TodoForm