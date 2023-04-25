import { useContext } from "react";
import { AuthContext } from "../auth/auth";

export const useAuthContext = () => {
    const context = useContext(AuthContext)

    if (!context) {
        throw Error('useAuth in provider')
    }

    return context
}