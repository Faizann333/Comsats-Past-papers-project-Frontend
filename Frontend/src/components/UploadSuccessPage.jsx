import React from 'react'
import { useContext  } from 'react';
import {  useNavigate } from "react-router-dom";
import { ThemeContext } from './store/ThemeContext';
const UploadSuccessPage = () => {
  const { darkMode } = useContext(ThemeContext);
  const navigate = useNavigate();
  return (
    <div className='bg-black font-bold'>
      <h1>Your Paper upload  state is pending . When the Admin approves it then it will be shown of home page </h1>
      <Button onClick={()=>navigate('/')} name="Back To Home"/>
    </div>
  )
}

export default UploadSuccessPage
