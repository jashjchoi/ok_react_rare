import React, { useContext } from 'react';
import { CalendarDate } from 'react-bootstrap-icons';
import { calendarItems } from '../constants';
import { TodoContext } from '../context';

function Calendar(){
    const { setSelectedProject } = useContext(TodoContext)
    return (
        <div className='Calendar'>
            <div className="header">
                <div className="title">
                    <CalendarDate size="18"/>
                    <p>My Schedule</p>
                </div>
            </div>
            <div className="items">
                {
                    calendarItems.map( item => 
                        <div className="item" key={item}
                        onClick={ () => setSelectedProject(item)}
                    >
                        {item}
                    </div>
                    )
                }
            </div>
        </div>
    )
}

export default Calendar