import { useState } from "react";
import { useAuthContext } from "./useAuth";

export const useSignup = () => {
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(null)
    const {dispatch} = useAuthContext()


    const signup = async (email, password) => {
        console.log(email, password); 
        setError(null)
        setIsLoading(true)
        try {
            const response = await fetch('http://localhost:4000/signup', {
              method: 'POST',
              headers: {'Content-Type': 'application/json'},
              body: JSON.stringify({email, password})
            })
            const json = await response.json()
            console.log('signup response:', json);
            if (!response.ok) {
              setIsLoading(false)
              setError(json.error)
            }
            if (response.ok) {
              localStorage.setItem('user', JSON.stringify(json))
              dispatch({type: 'LOGIN', payload: json})
            }
      
            setIsLoading(false)
      
          } catch (err) {
            setError(err.message)
            setIsLoading(false)
          }
        }
      
        return { signup, isLoading, error }
}