import React, { useEffect, useState } from 'react'
import {useNavigate, useParams } from 'react-router-dom'
import axios from "axios";
const EditUser = () => {
const navigate = useNavigate()
const {id} = useParams()
// const [val, setVal] = useState([])

const [user, setUser] = useState({
  first_name:"",
  last_name:"",
  email:"",
  username:"",
  
});

const {first_name, last_name, email,username} = user
const onInputChange=(e)=>{
  setUser({...user, [e.target.name]: e.target.value})
}

const onCancel = (e) =>{
    e.preventDefault()
    navigate('/adminhome')
}



useEffect(()=>{
  loadUser()
},[]) // eslint-disable-line


const loadUser = async () => {
  console.log('Hihiihihii');
  const result = await axios.post(`http://127.0.0.1:8000/edit/${id}`)
  setUser(result.data)
}



const onSubmit = async e =>{
  e.preventDefault()
  await axios.post(`http://127.0.0.1:8000/edit/${id}`,user)
  navigate('/users')
}

  return (
    <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50">
    <div>
        <a href="#/">
            <h3 className="text-4xl font-bold text-purple-600">
                Edit user
            </h3>
        </a>
    </div>
    <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-md sm:rounded-lg">
        <form onSubmit={onSubmit}>
            <div>
                <label
                    htmlFor="first_name"
                    className="block text-sm font-medium text-gray-700 undefined"
                >
                    Firsname
                </label>
                <div className="flex flex-col items-start">
                    <input
                    value={first_name}
                    onChange={e => onInputChange(e)}
                        type="text"
                        name="first_name"
                        className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    />
                </div>
            </div>
            <div>
                <label
                    htmlFor="last_name"
                    className="block text-sm font-medium text-gray-700 undefined"
                >
                    Lastname
                </label>
                <div className="flex flex-col items-start">
                    <input value={last_name}
                    onChange={e => onInputChange(e)}
                        type="text"
                        name="last_name"
                        className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    />
                </div>
            </div>
            <div className="mt-4">
                <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 undefined"
                >
                    Email
                </label>
                <div className="flex flex-col items-start">
                    <input value={email}
                  onChange={e => onInputChange(e)}

                        type="email"
                        name="email"
                        className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    />
                </div>
            </div>
            <div className="mt-4">
                <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 undefined"
                >
                    Username
                </label>
                <div className="flex flex-col items-start">
                    <input value={username}
                          onChange={e => onInputChange(e)}

                        type="text"
                        name="username"
                        className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    />
                </div>
            </div>
    
   
            <div className="flex items-center justify-end mt-4">
                <a onClick={onCancel}
                    className="text-sm text-gray-600 underline hover:text-gray-900"
                    href="#/"
                >
                    cancel 
                </a>
                <button
                    type="submit"
                    className="inline-flex items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-900 border border-transparent rounded-md active:bg-gray-900 false"
                >
                    Update 
                </button>
            </div>
        </form>
    </div>
</div>

  )
}

export default EditUser