import React, { createContext, useState } from 'react'
import { useTodos, useProjects, useFilterTodos, useProjectsWithStats } from '../hooks'

const TodoContext = createContext();

function TodoContextProvider({children}){
    const defaultProject = 'today'
    const [selectedProject, setSelectedProject] = useState(defaultProject)
    const [selectedTodo, setSelectedTodo] = useState(undefined)
    const todos = useTodos();
    const projects = useProjects();
    const filteredTodos = useFilterTodos(todos, selectedProject);
    const projectsWithStats = useProjectsWithStats(projects, todos)

    return (
        <TodoContext.Provider
            value={
                {
                    selectedProject,
                    setSelectedProject,
                    selectedTodo,
                    setSelectedTodo,
                    todos : filteredTodos,
                    projects : projectsWithStats,
                }
            }>
            {children}
        </TodoContext.Provider>
    )
}

export { TodoContextProvider, TodoContext }