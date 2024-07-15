'use client'

import { useAuthContext } from "@/app/components/context/AuthContext";
import { useState } from "react"
import toast from "react-hot-toast";

const useLogout = () => {
    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthContext();

    const logout = async () => {
        setLoading(true);
        try {
            const resp = await fetch("http://localhost:5000/api/auth/logout", {
                method: 'POST',
            });

            const data = await resp.json();
            if (!resp.ok) {
                throw new Error(data.error);
            }

            setAuthUser(null);
        }
        catch (error: unknown) {
            if (error instanceof Error) {
                console.log("error in logout controller", error.message);
                toast.error(error.message);
            }
        }
        finally {
            setLoading(false);
        }
    };

    return { loading, logout };
};


export default useLogout;