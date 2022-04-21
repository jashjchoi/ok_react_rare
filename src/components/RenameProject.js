import React, {useContext, useState} from 'react';
import ProjectForm from './ProjectForm';
import { TodoContext } from '../context';
import firebase from '../firebase';


function RenameProject({project, setShowModal}){
    const [newProjectName, setNewProjectName] = useState(project.name)
    const { selectedProject, setSelectedProject } = useContext(TodoContext)

        // rename Project
        const renameProject = (project, newProjectName) => {
            const projectsRef = firebase.firestore().collection('projects')
            const todosRef = firebase.firestore().collection('todos')
    
            const { name : oldProjectName } = project
    
            projectsRef
                .where('name', '==', newProjectName)
                .get()
                .then( querySnapshot => {
                    if(!querySnapshot.empty){
                        alert('Project with the same name already exists!')
                    }else{
                        projectsRef
                            .doc(project.id)
                            .update({
                                name : newProjectName
                            })
                            .then( () => {
                                todosRef
                                    .where('projectName', '==', oldProjectName)
                                    .get()
                                    .then( querySnapshot => {
                                        querySnapshot.forEach( doc => {
                                            doc.ref.update({
                                                projectName : newProjectName
                                            })
                                        })
                                    })
                                    .then( () => {
                                        if(selectedProject === oldProjectName){
                                            setSelectedProject(newProjectName)
                                        }
                                    })
                            })
                    }
                })
        }
    
        function handleSubmit(e){
            e.preventDefault()
    
            renameProject(project, newProjectName)
    
            setShowModal(false)
        }
    
    return (
        <div className='RenameProject'>
            <ProjectForm
                handleSubmit={handleSubmit}
                heading='Edit Tag'
                value={newProjectName}
                setValue={setNewProjectName}
                setShowModal={setShowModal}
                confirmButtonText='Confirm'
            />
        </div>
    )
}

export default RenameProject