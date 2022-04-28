import React from 'react';
// import './assets/styles.css'
import { useHistory } from "react-router-dom";
import firebase from '../../firebase/index';
import { auth} from '../../firebase/index';
import {useAuthState} from 'react-firebase-hooks/auth';
import Home from './Home';
// import { Button } from 'react-bootstrap';


// const [ userHasAuthenticated] = useState(false);


const test = async () => {
    try {
        var provider = new firebase.auth.GoogleAuthProvider()
        const res = await firebase.auth().signInWithPopup(provider);
        const user = res.user;
		// userHasAuthenticated(true);
    	// history.push("/");
        alert(user.displayName)
        // const q = query(collection(db, "users"), where("uid", "==", user.uid));
        // const docs = await getDocs(q);
        // if (docs.docs.length === 0) {
        //     await addDoc(collection(db, "users"), {
        //         uid: user.uid,
        //         name: user.displayName,
        //         authProvider: "google",
        //         email: user.email,
        //     });
        // }
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
}


// const signInWithGoogle = () => 
// 	auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());


// const history = useHistory();

// const Loginpage = () => {
// 	const [user] = useAuthState(auth)
// 	return user ? <Home /> : <Login />
// }
// const SignIn = () => {
//     <>
//     <div>
//       <button onClick={signInWithGoogle} className="btn btn-dark btn-lg btn-block">Sign In with Google</button>
//     </div>
//   </>


export default function Login() {
	// const [user] = useAuthState(auth)
	return (
		<div className="logincontainer">
        	<div className="inner">
					<h3>Welcome to Oklahoma Rare</h3>
					<center>
						<button className="btn btn-dark btn-lg btn-block" onClick={ test}
					>Sign In with Google</button>
					</center>
			</div>
		</div>
	);
}
