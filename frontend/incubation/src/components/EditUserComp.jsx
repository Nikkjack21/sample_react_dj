import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const EditUserComp = () => {
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate()
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { state } = useLocation();
    const { id } = state;
    let [val,setValue]=useState([]);


    let updateUser = async (e)=>{

        e.preventDefault()
     
        let response = await fetch(`http://127.0.0.1:8000/edit/${id}`, {
            method:'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({'username':e.target.username.value,'first_name':e.target.first_name.value,'email':e.target.email.value,'last_name':e.target.email.value, })
        })
        let data = await response.json()
        
        
        if(response.status === 200){
            
            navigate('/adminhome')
    
        }else{
            alert('something went wrong !')
        }
    
    }  
    




  return (
    <>
    <a href='#/'
      className="bg-blue-200 text-black active:bg-blue-500 
    font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
      
      onClick={() => setShowModal(true)}
    >
      Edit User
    </a>
    {showModal ? (
      <>
        <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="relative w-auto my-6 mx-auto max-w-3xl">
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                <h3 className="text-3xl font=semibold">Add User</h3>
                <a href='#/'
                  className="bg-transparent border-0 text-black float-right"
                  onClick={() => setShowModal(false)}
                >
                  <span className="text-black opacity-7 h-6 w-6 text-xl block bg-gray-400 py-0 rounded-full">
                    x
                  </span>
                </a>
              </div>
              <div className="relative p-6 flex-auto">
                <form 
                 className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 w-full">
                  <label className="block text-black text-sm font-bold mb-1">
                    First Name
                  </label>
                  <input
                            value={val.firstName}
                            onChange={(e)=>setValue(e.target.value)}
                    type="text"
                    name="first_name"
                    className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                  />
                  <label className="block text-black text-sm font-bold mb-1">
                    Last Name
                  </label>
                  <input 
                        value={val.lastName}
                        onChange={(e)=>setValue(e.target.value)}
                    type="text"
                    name="last_name"
                    className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                  />
                  <label className="block text-black text-sm font-bold mb-1">
                    Email
                  </label>
                  <input
                           value={val.email}
                           onChange={(e)=>setValue(e.target.value)}
                    type="email"
                    name="email"
                    className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                  />
                  <label className="block text-black text-sm font-bold mb-1">
                    Username
                  </label>
                  <input 
                
                   value={val.username}
                   onChange={(e)=>setValue(e.target.value)}
                    type="text"
                    name="username"
                    className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                  />
        
                </form>
              </div>
              <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                <a href="#/"
                  className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                
                  onClick={() => setShowModal(false)}
                >
                  Close
                </a>
                <button
                  className="text-white bg-yellow-500 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                  type="button"
                  onClick={ ''}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    ) : null}
  </>
  )
}

export default EditUserComp