import React, { useContext } from 'react'
import { globalContext } from '../context/GlobalProvider'
import "./Button1.css"

const Button1 = () => {

    const {mode,setMode} = useContext(globalContext);

    return <button className='main-button' onClick={() => setMode(!mode)}>{mode? "Light ☀️":"Dark 🌙"}</button>;

}

export default Button1
