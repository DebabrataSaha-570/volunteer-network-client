import { useState, useEffect } from 'react'
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import InitializeAuthentication from '../pages/Login/Firebase/firebase.init';
InitializeAuthentication()

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider();
    // googleProvider.addScope('email');
    const signInUsingGoogle = () => {
        setIsLoading(false)
        return signInWithPopup(auth, googleProvider);


    }
    const logOut = () => {
        setIsLoading(true)
        signOut(auth).then(() => {
            setUser({})
        }).catch((error) => {
            console.log(error)
        })
            .finally(() => setIsLoading(false))
    }
    //observe whether user auth state changed or not 
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
            setIsLoading(false)
        });
    }, [])

    return {
        user,
        error,
        signInUsingGoogle,
        logOut,
        setUser,
        setError,
        isLoading,
        setIsLoading



    }
}
export default useFirebase;