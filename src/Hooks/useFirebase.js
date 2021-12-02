import { useState, useEffect } from 'react'
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import InitializeAuthentication from '../pages/Login/Firebase/firebase.init';
InitializeAuthentication()

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState('')
    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider();
    // googleProvider.addScope('email');
    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider);

    }
    const logOut = () => {
        signOut(auth).then(() => {
            setUser({})
        }).catch((error) => {
            console.log(error)
        })
    }
    //observe whether user auth state changed or not 
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
        });
    }, [])

    return {
        user,
        error,
        signInUsingGoogle,
        logOut,
        setUser,
        setError



    }
}
export default useFirebase;