import React, { useContext } from 'react'
import AuthContext from '../context/AuthContext'

const Header = () => {
    const {name} = useContext(AuthContext)
  return (
    <div>
        <h1> HEADERRRR  My name is {name}</h1>
    </div>
  )
}

export default Header