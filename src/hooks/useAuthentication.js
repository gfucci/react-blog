import { db } from '../firebase/config'

import {
    getAuth,
    createUserWithEmailAndPassword,
    updateProfile,
    signInWithEmailAndPassword,
    signOut
} from 'firebase/auth'

import { useEffect, useState } from 'react'

export const useAuthentication = () => {

    const [error, setError] = useState(null)
    const [loading, setLoadind] = useState(null)

    /**
     * clean up
     * deal with memory leak
     */
    const [cancelled, setCancelled] = useState(false)

    const auth = getAuth()

    function checkIfIsCancelled() {
        if (cancelled) {
            return
        }
    }

    //user authentication
    const createUser = async (data) => {
        checkIfIsCancelled()

        setLoadind(true)
        setError(null)

        try {
            //create user
            const { user } = await createUserWithEmailAndPassword(
                auth,
                data.email,
                data.password
            )
            
            //update user
            await updateProfile(user, {
                displayName: data.displayName
            })

            setLoadind(false)
            
            return user
            
        } catch (error) {
            
            console.log(error.message)
            console.log(typeof error.message)

            let systemErrorMessage

            if (error.message.includes("Password")) {
                systemErrorMessage = "A senha precisa conter 6 caracteres ou mais"
            } else if (error.message.includes("email-already")) {
                systemErrorMessage = "E-mail já cadastrado"
            } else {
                systemErrorMessage = "Ocorreu um erro, por favor tente novamente mais tarde!"
            }

            setError(systemErrorMessage)
            setLoadind(false)
        }
    }

    //logout - sign out
    const logout = () => {

        checkIfIsCancelled()

        signOut(auth)
    }

    //login
    const login = async (data) => {

        checkIfIsCancelled()
        setLoadind(true)
        setError(false)

        try {

            await signInWithEmailAndPassword(auth, data.email, data.password)
            
            setLoadind(false)

        } catch (error) {
            
            console.log(error.message)
            console.log(typeof error.message)

            let systemErrorMessage

            if (error.message.includes("user-not-found")) {
                systemErrorMessage = "Usuário não encontrado"
            } else if (error.message.includes("wrong-password")) {
                systemErrorMessage = "Senha incorreta"
            } else {
                systemErrorMessage = "Ocorreu um erro, por favor tente novamente mais tarde!"
            }

            setError(systemErrorMessage)
            setLoadind(false)
        }
    }

    useEffect(() => {
        return () => setCancelled(true)
    }, [])

    return {
        auth,
        createUser,
        error,
        loading,
        logout,
        login
    }
}