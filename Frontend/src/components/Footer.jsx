import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className='min-h-[250px] flex flex-col gap-11 justify-start p-7 text-white w-full bg-black  '>
            <div className='flex justify-evenly'>
                <ul>
                    <li className='font-bold mb-2'>Quick Links</li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/past-papers">Past Papers</Link></li>
                    <li><Link to="/reviews">Reviews</Link></li>
                    <li> <Link to="/meet-admin">Meet Admin</Link></li>
                </ul>
                <ul className='hidden sm:flex flex-col gap-1'>
                    <li className='font-bold mb-2'>Quick Links</li>
                    <li><Link to="/contributions">Contributions</Link></li>
                    <li><Link to="/upload/paper">Upload Papers</Link></li>
                    <li><Link to="/upload/review">Post Review</Link></li>

                </ul>
                <div>
                    <h1 className='font-bold mb-2'>Contact Us</h1>
                    <h2><a href="https://instagram.com/xtylish_bacha333"
                        className=" cursor-pointer"
                        target="_blank"
                        rel="noopener noreferrer">Instagram</a></h2>
                    <h2>Facebook</h2>
                    <h2>Watsapp</h2>
                    <h2>Email</h2>
                </div>
            </div>
            <h1 className='text-center '> © {new Date().getFullYear()}  PastPapersPortal. All rights reserved. | Developed with ❤️ by Faizan Ahmed</h1>
        </footer>
    )
}
export default Footer
