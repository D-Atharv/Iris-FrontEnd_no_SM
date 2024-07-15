'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuthContext } from '../components/context/AuthContext'
import Link from 'next/link'
import bg_img from '../../public/images/bg_img.jpg'
import useLogin from './useLogin'

export default function Login() {

    const [inputs, setInputs] = useState({
        username: "",
        password: "",
    });

    // const { loading, login } = useLogin();
    const { login } = useLogin();
    const [loading, setLoading] = useState(false);

    const handleSubmitForm = (e: React.FormEvent) => {
        e.preventDefault();
        // login(inputs.username, inputs.password);

        setLoading(true);

        setTimeout(() => {
            login(inputs.username, inputs.password);
            setLoading(false);
        }, 1000);
    }

    const { authUser } = useAuthContext();
    const router = useRouter();

    useEffect(() => {
        if (authUser) {
            router.push('/people');
        }
    }, [authUser, router]);

    return (
        <div className="min-h-screen  bg-cover bg-center bg-fixed flex flex-col justify-center items-center px-8" style={{ backgroundImage: `url(${bg_img.src})`, backgroundRepeat: 'no-repeat' }}>
            <main className="bg-black p-8 rounded-lg sm:w-96 lg:w-96 max-w-md shadow-md shadow-c_white">
                <h1 className="text-2xl font-extrabold text-c_blue mb-6 text-center">LOGIN</h1>

                <form onSubmit={handleSubmitForm}>

                    <div className="mb-4">
                        <label
                            htmlFor="username"
                            className="block text-gray-300 mb-2">Username
                        </label>
                        <input
                            type="text"
                            id="username"
                            className="w-full px-3 py-2 bg-gray-400 text-c_black rounded font-semibold"
                            value={inputs.username}
                            onChange={(e) => setInputs({ ...inputs, username: e.target.value })} />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="password" className="block text-gray-300 mb-2">Enter Password</label>
                        <input
                            type="password"
                            id="password"
                            className="w-full px-3 py-2 bg-gray-400 text-c_black rounded font-semibold"
                            value={inputs.password}
                            onChange={(e) => setInputs({ ...inputs, password: e.target.value })} />
                    </div>

                    <div className='flex justify-center'>
                        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800" disabled={loading}>
                            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-800 rounded-md group-hover:bg-opacity-0">
                                {loading ? "Loading..." : "Login"}
                            </span>
                        </button>
                    </div>
                </form>
                <p className="mt-4 text-gray-400 text-center">
                    Don't have an account? <Link href="/signup" className="text-c_blue hover:underline">Sign up</Link>
                </p>
            </main>
        </div>


    )
}
