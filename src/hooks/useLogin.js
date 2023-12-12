import { useState } from "react";
import { useAuthContext } from "./useAuth";

export const useLogin = () => {
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(null)
    const {dispatch} = useAuthContext()


    const login = async (email, password) => {
      console.log(email, password); 
      setError(null);
      setIsLoading(true);
      try {
        const response = await fetch('http://localhost:4000/login', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({email, password}),
        });
        const json = await response.json();
        console.log('signin response:', json);
    
        if (!response.ok) {
          throw new Error(json.error || 'Login failed');
        }
    
        localStorage.setItem('user', JSON.stringify(json));
        dispatch({type: 'LOGIN', payload: json});
        setIsLoading(false);
    
        return json; // Return the response for use in the Login component
    
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
        throw err; // Re-throw the error for the Login component
      }
    };
        return { login, isLoading, error }
}