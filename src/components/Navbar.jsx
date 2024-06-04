// import React from 'react'
import { useLocation } from "react-router-dom";
import { Link } from 'react-router-dom';
const Navbar = () => {
    const location = useLocation();
  return (
    <>
    <div>
      <div  className="sticky top-0 z-50 flex items-center justify-between my-3 rounded-md shadow-sm shadow-[#edae2f4d] xxsm:px-5 md:px-2 md:py-2 md:mx-4 bg-[#181e24]">
        <Link to="/"><h1 className="inline-block text-3xl font-medium text-[#edae2f] cursor-pointer font-Cursive hover:transform hover:scale-100 xxsm:flex xxsm:items-center xxsm:justify-center md:justify-start md:mx-5 ">
          BookWorld
        </h1></Link>
       <div className="flex items-center gap-5 px-2">
        {location.pathname === '/bookshelf'?<Link to='/'><button className='rounded-lg px-2.5 py-1.5 border border-[#edae2f] cursor-pointer'>Home</button></Link>
       : <Link to='/bookshelf'><button className='rounded-lg px-2.5 py-1.5 border border-[#edae2f] cursor-pointer'>My BookShelf</button></Link>}
       </div>
      </div>
      </div>
    </>
  )
}

export default Navbar