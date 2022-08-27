import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from '../../components/Header'
import AuthContext from "../../context/AuthContext";


const BookCompany = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const [save, setSave] = useState([]);



    
  const [fullname, setFullname] = useState("");
  const [phone, setPhone] = useState("");
  const [company_name, setComp] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");


  
    useEffect(() => {
      if (user && user !== null) {
        setSave(user);
        navigate("/book");
      }
    }, [user, navigate, save]);
    console.log(user,"000");

    const onSubmit=(e)=>{
        e.preventDefault()
        console.log('Submit: ', user.user_id)
        axios.post(`http://127.0.0.1:8000/booking/${user.id}/`,  {
            fullname:fullname,
            phone:phone,
            company_name:company_name,
            city:city,
            state:state,
            email:email,
            address:address,
            id: user.id
        },{
            headers:{
                "Content-type": "application/json",
                // 'Authorization': `Bearer ${localStorage.getItem('authToken')}`

            }
        }).then((response)=>{
            console.log('Response: ', response)
            if(response.status === 200){
                navigate('/book')
                alert('Booking Submitted')
                reset()
               
            }else{
                alert('Something wrong! Please try again later')
            }
        })
    }
    const reset=()=>{
        setFullname('');
        setAddress('');
        setComp('');
        setEmail('');
        setAddress('')
        setCity('');
        setState('');
        setPhone('')
    }

  return (
    <div>
        <Header/>
        <div >

  <div className="w-full bg-green fixed shadow z-1">
    <div className="container mx-auto">

    </div>
  </div>

  <div className="w-full bg-grey-lightest" style={{padding:"top-4rem"}}>
    <div className="container mx-auto py-8">
      <form onSubmit={onSubmit} className="w-5/6 lg:w-1/2 mx-auto bg-white rounded shadow">
            <div className="py-4 px-8 bg-sky-100 text-black text-xl border-b border-grey-lighter">Make Your Reservation</div>
            <div className="text-left bg-stone-100 py-4 px-8">
                <div className="flex mb-4">
                    <div className="w-1/2 mr-1">
                        <label className="block text-grey-darker text-sm font-bold mb-2" >Full Name:</label>
                        <input
                        value={fullname} onChange={(e)=>setFullname(e.target.value)}
                         className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" name="fullname"type="text" placeholder="Fullname"/>
                    </div>
                    <div className="w-1/2 ml-1">
                        <label className="block text-grey-darker text-sm font-bold mb-2" >Phone:</label>
                        <input 
                         value={phone} onChange={(e)=>setPhone(e.target.value)}
                         className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" name="phone"  type="number" placeholder="Phone"/>
                    </div>
                </div>
                <div className="flex mb-4">
                    <div className="w-1/2 mr-1">
                        <label className="block text-grey-darker text-sm font-bold mb-2" >Company Name:</label>
                        <input
                         value={company_name} onChange={(e)=>setComp(e.target.value)}
                        className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" name="company_name" id="" type="text" placeholder="Company"/>
                    </div>
                    <div className="w-1/2 ml-1">
                        <label className="block text-grey-darker text-sm font-bold mb-2" >City:</label>
                        <input 
                         value={city} onChange={(e)=>setCity(e.target.value)}
                        className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" name="city"  type="text" placeholder="City"/>
                    </div>
                </div>
                <div className="flex mb-4">
                    
                    <div className="w-1/2 ml-1 mb-2">
                        <label className="block text-grey-darker text-sm font-bold mb-2" >State:</label>
                        <input 
                         value={state} onChange={(e)=>setState(e.target.value)}
                        className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" name="state"  type="text" placeholder="State"/>
                    </div>
                    <div className="w-1/2 ml-1 mb-2">
                        <label className="block text-grey-darker text-sm font-bold mb-2" >Email:</label>
                        <input
                         value={email} onChange={(e)=>setEmail(e.target.value)}
                        className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" name="email"  type="email" placeholder="Email"/>
                    </div>
                </div>
                <div className="mb-4">
                    <label className="block text-grey-darker text-sm font-bold mb-2">Address:</label>
                    <textarea spellcheck="false"  value={address} onChange={(e)=>setAddress(e.target.value)}
                     className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" name="address" type="text" placeholder="Address"/>
                </div>
       
                <div className="flex items-center justify-between mt-8">
                    <button className="bg-blue hover:bg-blue-dark text-black font-bold py-2 px-4  border border-red-500 hover:bg-green-300" type="submit">
                        Book Now
                    </button>
                </div>
            </div>
        </form>
       
    </div>
  </div>
  <footer className="w-full bg-grey-lighter py-8">
    <div className="container mx-auto text-center px-8">
        <p className="text-grey-dark mb-2 text-sm">Go back <button onClick={()=>{navigate('/')}} className="font-bold">Home</button></p>
    </div>
  </footer>
</div>
    </div>
  )
}

export default BookCompany