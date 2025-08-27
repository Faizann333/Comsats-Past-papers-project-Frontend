import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className='min-h-[250px] flex flex-col gap-9 justify-start p-7 text-white w-full bg-black  '>
            <div className='flex justify-evenly'>
                <ul>
                    <li className='font-bold mb-2'>Quick Links</li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/past-papers">Past Papers</Link></li>
                   <li><Link to="/upload-paper">Upload Papers</Link></li>
                   <li> <Link to="/meet-admin">Meet Admin</Link></li>
                </ul>
                <div>
                    <h1 className='font-bold mb-2'>Contact Us</h1>
                    <h2>Instagram</h2>
                    <h2>Facebook</h2>
                    <h2>Watsapp</h2>
                    <h2>Email</h2>
                </div>
            </div>
            <h1 className='text-center'> © 2025 UniPastPapers. All rights reserved. | Developed with ❤️ by Faizan Ahmed</h1>
        </footer>
    )
}
export default Footer
