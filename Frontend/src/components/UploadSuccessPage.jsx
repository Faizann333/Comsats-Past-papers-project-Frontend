import React from 'react'
import { useContext } from 'react';
import { ThemeContext } from './store/ThemeContext';
const UploadSuccessPage = () => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div className='bg-black font-bold'>
      <h1>Your Paper upload  state is pending . When the Admin approves it then it will be shown of home page </h1>
    </div>
  )
}

export default UploadSuccessPage
