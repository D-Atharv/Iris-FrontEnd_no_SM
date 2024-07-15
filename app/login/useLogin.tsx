import { useState } from "react"
import { useAuthContext } from "../components/context/AuthContext";
import toast from "react-hot-toast";

const useLogin = () => {
    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthContext();

    const login = async (username: string, password: string) => {
        try {
            setLoading(true);

            const resp = await fetch('http://localhost:5000/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            const data = await resp.json();

            if (!resp.ok) {
                throw new Error(data.error);
            }
            setAuthUser(data);
        }
        catch (error: unknown) {
            if (error instanceof Error) {
                console.log("error in login controller", error.message);
                toast.error(error.message);
            }
        }
        finally {
            setLoading(false);
        }
    }
    return { loading, login };
}

export default useLogin;