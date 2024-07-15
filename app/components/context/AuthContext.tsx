'use client'
import { Dispatch, SetStateAction, createContext, useEffect, useState, useContext } from "react";

type AuthUserType = {
    id: string;
    fullName: string;
    email: string;
    profilePic: string;
    gender: string;
}

const AuthContext = createContext<{
    authUser: AuthUserType | null;
    setAuthUser: Dispatch<SetStateAction<AuthUserType | null>>;
    isLoading: boolean;
}>({
    authUser: null,
    setAuthUser: () => { },
    isLoading: true
})

export const useAuthContext = () => {
    return useContext(AuthContext);
}


export const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [authUser, setAuthUser] = useState<AuthUserType | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchAuthUser = async () => {
            try {
                const resp = await fetch('http://localhost:5000/api/auth/me');
                const data = await resp.json();

                if (!resp.ok) {
                    throw new Error(data.error);
                }
                setAuthUser(data);

            } catch (error) {
                console.log(error);
                console.log("error fetching auth user");
            } finally {
                setIsLoading(false);
            }
        }
    })

    return (
        <AuthContext.Provider
            value={{
                authUser,
                isLoading,
                setAuthUser
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}