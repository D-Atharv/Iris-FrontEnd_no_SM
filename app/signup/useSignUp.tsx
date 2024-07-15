import { useState } from "react"
import { useAuthContext } from "../components/context/AuthContext";
import toast from "react-hot-toast";

type SignUpInputs = {
    fullName: string;
    username: string;
    password: string;
    confirmPassword: string;
    gender: string;
};

const useSignUp = () => {
    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthContext();

    const signup = async (inputs: SignUpInputs) => {
        try {
            setLoading(true);

            const resp = await fetch('http://localhost:5000/api/auth/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(inputs),
            });

            const data = await resp.json();

            if (!resp.ok) {
                throw new Error(data.error);
            }

            setAuthUser(data);

        } catch (error: unknown) {
            if (error instanceof Error) {
                console.log("error in signup controller", error.message);
                toast.error(error.message);
            }
        }

        finally {
            setLoading(false);
        }
    };

    return { signup, loading };
}

export default useSignUp;