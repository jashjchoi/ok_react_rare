import React from 'react';
import '../../App.css';
import '../assets/css/style.css'
import Menu from '../Menu'
import Calendar from '../Calendar'
import Main from '../Main'
import AddNewTodo from '../AddNewTodo'
import Projects from '../Projects'
import Todos from '../Todos'
import EditTodo from '../EditTodo'
import Login from './Login'
import { auth} from '../../firebase/index';
import {useAuthState} from 'react-firebase-hooks/auth';


export default function Home() {
  const [user] = useAuthState(auth);
  return ( user ?  
    <>
      <Menu>
        <Calendar />
        <Projects />
        <AddNewTodo />
      </Menu>
      <Main>
        <Todos />
        <EditTodo />
      </Main>
      </>
   : <Login/> )
}
