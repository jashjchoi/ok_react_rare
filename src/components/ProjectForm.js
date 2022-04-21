import React from 'react'

function ProjectForm({handleSubmit, heading, value, setValue, setShowModal, confirmButtonText}){

    return (
        <form onSubmit={handleSubmit} className='ProjectForm'>
            <h3>{heading}</h3>
            <input value={value}
                onChange={(e) => setValue(e.target.value)}
                type='text'
                placeholder='Tag name...'
                autoFocus
            />
            <button className="confirm">
                {confirmButtonText}
            </button>
            <button className='cancel' role='button' onClick={() => setShowModal(false)}>
                Cancel
            </button>
           
        </form>
    )
}

export default ProjectForm