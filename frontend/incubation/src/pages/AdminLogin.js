import React, { useContext } from 'react'
import AuthContext from '../context/AuthContext'
import Admin from "../assets/admin.jpg";


const AdminLogin = () => {
    const {AdminLogin} = useContext(AuthContext)



  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
    <div className="hidden sm:block">
      <img className="w-full h-full object-fill" src={Admin}  alt="" />
    </div>

    <div className="bg-gray-100 flex flex-col justify-center">
      <form
      
        onSubmit={AdminLogin}
        className="max-w-[400px] w-full mx-auto bg-white p-4"
      >
        <h2 className="text-4xl font-bold text-center py-4"> Administration</h2>
        <div className="flex flex-col py-2">
          <label className="text-left"> Username: </label>
          <input name="username" className="border py-2" type="text" />
        </div>

        <div className="flex flex-col py-2">
          <label className="text-left"> Password: </label>
          <input name="password" className="border py-2" type="Password" />
        </div>
        <button
          className="w-full my-5 py-2 bg-sky-400 text-white text-xl hover:bg-indigo-400
        cursor-pointer "
        >
          Signin
        </button>

      </form>
    </div>
  </div>
  )
}

export default AdminLogin