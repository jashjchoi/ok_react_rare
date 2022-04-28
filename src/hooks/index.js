import { useState, useEffect } from 'react';
import firebase from '../firebase';
import moment from 'moment';

export function useTodos(){
    const [todos, setTodos] = useState([])

    useEffect(() => {
        let unsubscribe = firebase
        .firestore()
        .collection('todos')
        .onSnapshot( snapshot => {
            const data = snapshot.docs.map( doc => {
                return {
                    id : doc.id,
                    ...doc.data()
                }
            })
            setTodos(data)
        })
        return () => unsubscribe()
    })
    return todos
}

export function useProjects(todos){
    const [projects, setProjects] = useState([])
    //number indicator for number of Todo under each tag
    // function calculateNumOfTodos(projectName, todos){
    //     return todos.filter( todo => todo.projectName === projectName).length
    // }

    useEffect(() => {
        let unsubscribe = firebase
        .firestore()
        .collection('projects')
        .onSnapshot( snapshot => {
            const data = snapshot.docs.map( doc => {
                const projectName = doc.data().name
                return {
                    id : doc.id,
                    name : projectName,
                }
            })
            setProjects(data)
        })

        return () => unsubscribe()
    }, [])

    return projects
}

export function useProjectsWithStats(projects, todos){
    const [projectsWithStats, setProjectsWithStats] = useState([])

    useEffect(() => {
        const data = projects.map((project) => {
            return {
                numOfTodos : todos.filter( todo => todo.projectName === project.name && !todo.checked).length, ...project
            }
        })
        setProjectsWithStats(data)
    }, [projects, todos])
    return projectsWithStats
};

export function useFilterTodos(todos, selectedProject){
    const [filteredTodos, setFilteredTodos] = useState([])
    useEffect( () => {
        let data;
        const todayDateFormated = moment().format('MM/DD/YYYY')

        if(selectedProject === 'Today'){
            data = todos.filter(todo => todo.date === todayDateFormated)
        }else if(selectedProject === 'Upcoming'){
            data = todos.filter(todo => {
                const todoDate = moment(todo.date, 'MM/DD/YYYY')
                const todayDate = moment(todayDateFormated, 'MM/DD/YYYY')
                const diffDays = todoDate.diff(todayDate, 'days')
                return diffDays >=0 && diffDays < 7
            })
        }else if( selectedProject === 'All'){
            data = todos
        }else{
            data = todos.filter(todo => todo.projectName === selectedProject)
        }

        setFilteredTodos(data)
    }, [todos, selectedProject])
    return filteredTodos
};