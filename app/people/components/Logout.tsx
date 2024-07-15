import React from 'react'
import useLogout from './useLogout/useLogout'

const Logout = () => {

    const { logout } = useLogout();

    return (
        <>
            <div className="hidden xl:block">
                <button
                    type="button"
                    className="text-white bg-c_black shadow-md shadow-c_black p-2 rounded-md font-semibold"
                    onClick={logout}>
                    Log Out
                </button>
            </div>
        </>
    )
}

export default Logout
