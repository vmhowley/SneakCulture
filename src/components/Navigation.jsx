import React, { useState } from 'react'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import HomeIcon from '../assets/icons/Home.svg'
import Category from '../assets/icons/category.svg'
import Profile from '../assets/icons/Profile.svg'
import WishList from '../assets/icons/wishList.svg'
import { Link } from 'react-router-dom';

function Navigation() {
    
    let path = location.pathname.substring(1);
    if(path === '') path = 'home';  // default to home page if no path is provided
    const [selected, setSelected] = useState()
    const nav = [
        {
            title: 'home',
            url: '/',
            icon: <img src={HomeIcon} className='' alt="" />
        },
        {
            title: 'category',
            url: '/category',
            icon: <img src={Category} className='' alt="" />
        },
        {
            title: 'favorites',
            url: '/favorites',
            icon: <img src={WishList} className='' alt="" />
        },
        {
            title: 'profile',
            url: '/profile',
            icon: <img src={Profile} className='' alt="" />
        },
    ]

    const handleNavigation = (e) => {
        setSelected(e.currentTarget.id)
    }


  return (
    <nav className={`fixed left-0 bottom-2 w-screen px-8 p-2 z-50 `}>
        <ul className='flex justify-between bg-[#262626]  text-white border-t  rounded-full shadow-2xl p-4 px-8 '>
            {nav.map((item) => {
                return (

                    <Link to={item.url} onClick={handleNavigation} className={`${path === item.title ? 'bg-white  rounded-full px-3 py-1 transition-all ease-in-out duration-500 delay-75' : 'flex'}`} id={item.title} key={item.title}>
                        <div className={`flex items-center ${path === item.title ? 'invert':''}`} href={item.url}>{item.icon}
                            <p className={`${path != item.title ? 'hidden' : 'flex'} font-sans text-white `}>{item.title}</p>
                        </div>
                    </Link>
                )
            })}
        </ul>
    </nav>
  )
}

export default Navigation
