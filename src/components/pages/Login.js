import React from 'react';
// import './assets/styles.css'
import '../assets/css/login.css'
// import { useHistory } from "react-router-dom";
import firebase from '../../firebase/index';
// import { auth} from '../../firebase/index';
// import {useAuthState} from 'react-firebase-hooks/auth';
// import Home from './Home';
import GoogleButton from 'react-google-button'
// import { Button } from 'react-bootstrap';
import heartIcon1 from "../assets/images/heart-icon1.png";
import heartIcon2 from "../assets/images/heart-icon2.png";
import heartIcon3 from "../assets/images/heart-icon3.png";
import heartIcon4 from "../assets/images/heart-icon4.png";
import heartIcon5 from "../assets/images/heart-icon5.png";
import heartIcon7 from "../assets/images/heart-icon7.png";
import heartIcon8 from "../assets/images/heart-icon8.png";
import heartIcon9 from "../assets/images/heart-icon9.png";
import heartIcon10 from "../assets/images/heart-icon10.png";
import heartIcon11 from "../assets/images/heart-icon11.png";


// const [ userHasAuthenticated] = useState(false);


const test = async () => {
    try {
        var provider = new firebase.auth.GoogleAuthProvider()
        const res = await firebase.auth().signInWithPopup(provider);
        // const user = res.user;
		// userHasAuthenticated(true);
    	// history.push("/");
        // alert(user.displayName)
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
	return (
        <div className="login-container">
            <img src={heartIcon1} alt="" className="heart-icon heart-icon-1" />
            <img src={heartIcon2} alt="" className="heart-icon heart-icon-2" />
            <img src={heartIcon3} alt="" className="heart-icon heart-icon-3" />
            <img src={heartIcon4} alt="" className="heart-icon heart-icon-4" />
            <img src={heartIcon5} alt="" className="heart-icon heart-icon-5" />
            <img src={heartIcon7} alt="" className="heart-icon heart-icon-7" />
            <img src={heartIcon8} alt="" className="heart-icon heart-icon-8" />
            <img src={heartIcon9} alt="" className="heart-icon heart-icon-9" />
            <img src={heartIcon10} alt="" className="heart-icon heart-icon-10" />
            <img src={heartIcon11} alt="" className="heart-icon heart-icon-11" />
            <form className="auth-wrapper">
                <div className="auth-inner">
                    <div className="d-grid">
             
                        <h3 className="section__meta">Welcome to Oklahoma Rare</h3>
                        <GoogleButton onClick={ test} className="googlebtn" />
                    </div>
                </div>
            </form>
        </div>
	);
}
