import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../firebase/firebase.config";
// import { GoogleAuthProvider } from "firebase/auth/web-extension";

import { GoogleAuthProvider } from "firebase/auth";
import useAxiosPublic from "../hooks/useAxiosPublic";



export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // const googleProvider = GoogleAuthProvider();
    const provider = new GoogleAuthProvider();

    const axiosPublic = useAxiosPublic();


    // ---------------------------------------------
    const createUser = (email, password) => {
        setLoading(true);

        return createUserWithEmailAndPassword(auth, email, password)
    }


    // sign in
    const signInUser = (email, password) => {
        // toast("SUCCESSFULLY LOGIN!");
        setLoading(true);


        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleLogin = () => {
        // toast("SUCCESSFULLY LOGIN!");
        setLoading(true);


        return signInWithPopup(auth, provider)
    }
    // logout
    const logOut = () => {
        // toast("SUCCESSFULLY LOGOUT");
        setLoading(true);

        signOut(auth);
    }

    // Update Profile


    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })

    }
    // ----------------------------------------------

    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            // console.log('current user :', currentUser);
            if (currentUser) {
                // to do 
                const userInfo = {
                    email: currentUser.email
                };
                axiosPublic.post('/jwt', userInfo)
                .then(res => {
                    if(res.data.token){
                        localStorage.setItem('access-token', res.data.token);
                        setUser(currentUser);
                        setLoading(false);


                    }
                })

            }

            else {
                // todo
                localStorage.removeItem('access-token');
                setUser(null);
                setLoading(false);

            }
            
        });
        return () => {
           return  unsubscribe();
        }
    }, [axiosPublic])


    const authInfo = {
        user,
        loading,
        createUser,
        signInUser,
        logOut,
        googleLogin,
        updateUserProfile,

    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;