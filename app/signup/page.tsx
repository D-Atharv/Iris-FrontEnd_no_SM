'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuthContext } from '../components/context/AuthContext'
import bg_img from '../../public/images/bg_img.jpg'
import useSignUp from './useSignUp'

export default function Signup() {
    const [inputs, setInputs] = useState({
        fullName: "",
        username: "",
        password: "",
        confirmPassword: "",
        gender: "",
    });

    // const { signup, loading } = useSignUp();
    const { signup } = useSignUp();
    const [loading, setLoading] = useState(false);

    const { authUser } = useAuthContext();
    const router = useRouter();

    useEffect(() => {
        if (authUser) {
            router.push('/people');
        }
    }, [authUser, router]);

    const handleSubmitForm = (e: React.FormEvent) => {
        e.preventDefault();
        // signup(inputs);

        setLoading(true);

        setTimeout(() => {
            signup(inputs);
            setLoading(false);
        }, 1000);
    };

    return (
        <div
            className="min-h-screen bg-gray-900 flex flex-col justify-center items-center bg-cover bg-center"
            style={{ backgroundImage: `url(${bg_img.src})`, backgroundRepeat: 'no-repeat' }}
        >
            <main className="bg-black p-8 py-4 rounded-lg shadow-md sm:w-96 shadow-c_white lg:w-96 max-w-md">
                <h1 className="text-2xl font-bold text-c_blue mb-6 text-center">Sign Up</h1>

                <form onSubmit={handleSubmitForm}>

                    <div className="mb-4">
                        <label
                            htmlFor="fullName"
                            className="block text-gray-300 mb-2">Full Name
                        </label>
                        <input
                            type="text"
                            id="fullName"
                            className="w-full px-3 py-2 bg-gray-400 text-c_black rounded font-semibold"
                            value={inputs.fullName}
                            onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })} />
                    </div>

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

                    <div className="mb-4">
                        <label
                            htmlFor="password"
                            className="block text-gray-300 mb-2">Enter Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="w-full px-3 py-2 bg-gray-400 text-c_black rounded font-semibold"
                            value={inputs.password}
                            onChange={(e) => setInputs({ ...inputs, password: e.target.value })} />
                    </div>

                    <div className="mb-4">
                        <label
                            htmlFor="confirmPassword"
                            className="block text-gray-300 mb-2">Confirm Password
                        </label>
                        <input
                            type="password"
                            id="confirmPassword"
                            className="w-full px-3 py-2 bg-gray-400 text-c_black rounded font-semibold"
                            value={inputs.confirmPassword}
                            onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })} />
                    </div>

                    <div className="mb-4">
                        <span className="block text-gray-300 mb-2">Gender</span>
                        <div className="flex space-x-4">
                            <label className="flex items-center text-gray-300">
                                <input
                                    type="radio"
                                    name="gender"
                                    value="male"
                                    checked={inputs.gender === 'male'}
                                    onChange={(e) => setInputs({ ...inputs, gender: e.target.value })}
                                    className="mr-2"
                                />
                                Male
                            </label>
                            <label className="flex items-center text-gray-300">
                                <input
                                    type="radio"
                                    name="gender"
                                    value="female"
                                    checked={inputs.gender === 'female'}
                                    onChange={(e) => setInputs({ ...inputs, gender: e.target.value })}
                                    className="mr-2"
                                />
                                Female
                            </label>
                        </div>
                    </div>

                    <div className='flex justify-center' >
                        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800" disabled={loading}>
                            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-800 rounded-md group-hover:bg-opacity-0 "  >
                                {loading ? "Loading..." : "Sign Up"}
                            </span>
                        </button>
                    </div>
                </form>
                <p className="mt-4 text-gray-400 text-center">
                    Already have an account? <Link href="/login" className="text-c_blue hover:underline">Log in</Link>
                </p>
            </main>
        </div>
    )
}
