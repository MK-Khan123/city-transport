import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import './Login.css';
import { UserContext } from '../../App';
import firebaseConfig from './firebase.config';
import { useHistory, useLocation } from 'react-router';

//To handle [DEFAULT] error.
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const Login = () => {

    const [user, setUser] = useState({
        signedInUser: false,
        displayName: '',
        email: '',
        password: '',
        error: ''
    });

    const [newUser, setNewUser] = useState(true);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    console.log(loggedInUser);

    const googleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                // The signed-in user info.
                const user = result.user;
                user.signedInUser = true;
                setLoggedInUser(user);
                history.replace(from);
            }).catch((error) => {
                // Handle Errors here.
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    }

    const fbSignIn = () => {
        const provider = new firebase.auth.FacebookAuthProvider();
        firebase
            .auth()
            .signInWithPopup(provider)
            .then((result) => {
                // The signed-in user info.
                const user = result.user;
                user.signedInUser = true;
                setLoggedInUser(user);
                history.replace(from);
            })
            .catch((error) => {
                // Handle Errors here.
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    }

    const handleBlur = (e) => {
        let isFieldValid = true;
        if (e.target.name === 'email') {
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
        }
        else if (e.target.name === 'password') {
            const isPasswordValid = e.target.value.length > 6;
            const passwordHasNumber = /\d{1}/.test(e.target.value);
            isFieldValid = isPasswordValid && passwordHasNumber;
        }
        if (isFieldValid) {
            const newUserInfo = { ...user };
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }
    }

    const emailSignIn = (e) => {
        if (newUser && user.email && user.password) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then((res) => {
                    // Signed in
                    const newUserInfo = { ...user };
                    newUserInfo.signedInUser = true;
                    newUserInfo.error = '';

                    setUser(newUserInfo);
                    updateUserName(user.displayName);
                    setLoggedInUser(newUserInfo);
                    history.replace(from);
                    console.log('user added successfully', res.user);
                })
                .catch((error) => {
                    const newUserInfo = { ...user };
                    newUserInfo.signedInUser = false;
                    setUser(newUserInfo);
                    const errorMessage = error.message;
                    console.log('error message', errorMessage);
                });
        }
        if (!newUser && user.email && user.password) {
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then((res) => {
                    // Signed in
                    const oldUserData = { ...user };
                    oldUserData.error = ''; //For removing the error message when the user provides correct information for log in.
                    setUser(oldUserData);

                    const oldUserInfo = res.user;
                    oldUserInfo.signedInUser = true;
                    setLoggedInUser(oldUserInfo);
                    history.replace(from);
                    console.log('user info', res.user);
                })
                .catch((error) => {
                    const errorMessage = error.message;
                    const oldUserInfo = { ...user };
                    oldUserInfo.signedInUser = false;
                    oldUserInfo.error = errorMessage;
                    setUser(oldUserInfo);
                });
        }
        e.preventDefault();
    }

    const updateUserName = (name) => {
        const user = firebase.auth().currentUser;
        user.updateProfile({
            displayName: name
        }).then(function () {
            console.log('user name updated successfully');
        }).catch(function (error) {
            console.log(error);
        });
    }

    return (
        <div className='inputForm'>
            {newUser ? <h1>Create an account</h1> : <h1>Login</h1>}
            <div>
                <form onSubmit={emailSignIn}>
                    {newUser &&
                        <div className="mb-3">
                            <label className="form-label">Name</label>
                            <input name="displayName" type="text" onBlur={handleBlur} placeholder='Your Name' className="form-control" required />
                        </div>}

                    <div className="mb-3">
                        <label className="form-label">Email address</label>
                        <input name="email" type="email" onBlur={handleBlur} placeholder='Your Email' className="form-control" required />
                        <div className="form-text">We'll never share your email with anyone else.</div>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input name="password" type="password" onBlur={handleBlur} placeholder='minimum 6 characters with at least one numerical' className="form-control" required />
                    </div>

                    {newUser &&
                        <div className="mb-3">
                            <label className="form-label">Confirm Password</label>
                            <input name="confirmPassword" type="password" placeholder='Confirm Your Password' className="form-control" required />
                        </div>
                    }

                    {newUser ? <input type="submit" className="btn btn-primary" value='Create an account' /> : <input type="submit" className="btn btn-primary" value='Login' />}

                    {newUser || <p style={{ textAlign: 'center' }} className='error'>{user.error}</p>} {/* Providing error validation if the user email and password do not match during login sessions*/}

                    <div style={{ textAlign: 'center' }}>
                        {newUser ?
                            <div>
                                <h6>Already have an account ? <span className='toggleLoginStyle' onClick={() => setNewUser(!newUser)}>Login</span></h6>
                                <p>---------------------Or---------------------</p>
                            </div>
                            : <div>
                                <h6>Don't have an account ? <span className='toggleLoginStyle' onClick={() => setNewUser(!newUser)}>Create an account</span></h6>
                                <p>---------------------Or---------------------</p>
                            </div>
                        }
                    </div>

                </form>

                <div className="d-grid gap-2 col-6 mx-auto">
                    <button onClick={googleSignIn} style={{ borderRadius: '20px' }} className="btn btn-outline-danger" type="button">Continue with Google</button>
                    <button onClick={fbSignIn} style={{ borderRadius: '20px' }} className="btn btn-outline-primary" type="button">Continue with Facebook</button>
                </div>

            </div>
        </div>
    );
};

export default Login;