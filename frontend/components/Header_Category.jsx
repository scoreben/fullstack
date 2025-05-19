'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import { IoMdList } from "react-icons/io"; 
import { IoMdCloseCircle } from "react-icons/io";
import { FaSearch } from "react-icons/fa"; 

const Header_Category = () => {

    const path = usePathname()
    const data = [
        {
            id: 1,
            name: 'Sports'
        },
        {
            id: 2,
            name: 'Travel'
        },
        {
            id: 3,
            name: 'Education'
        },
        {
            id: 4,
            name: 'National'
        },
        {
            id: 5,
            name: 'Politice'
        },
        {
            id: 6,
            name: 'Technology'
        },
    ]

    const [cate_show, set_cate_show] = useState(false)
    const [show, setShow] = useState(false)

    return (
<div className='w-full'>
    <div className='bg-[#5271ff] w-full text-white uppercase font-semibold relative'>
        <div className='px-8 flex justify-between items-center relative h-[50px]'>
            <div onClick={() => set_cate_show(!cate_show)} className={` text-3xl flex lg:hidden font-bold h-full w-[50px] cursor-pointer justify-center items-center ${cate_show ? 'bg-[#00000026]' : '' } hover:bg-[#00000026] `}>
                <IoMdList /> 
            </div>

        <div className='flex-wrap hidden lg:flex'>
            <Link className={`px-6 font-medium py-[13px] ${path === '/' ? 'bg-[#00000026]' : ''} `} href={'/'} > Home </Link>

            {
                data.map((c,i) => <Link key={i} className={`px-6 font-medium py-[13px] ${path === c.name ? 'bg-[#00000026]' : ''} `} href={'/'} > { c.name} </Link>)
            } 
        </div>

    <div className='h-full w-[50px]'>
        <div onClick={() => setShow(!show)} className={`text-xl ${show ? 'bg-[#00000026]' : ''} font-bold h-full w-full cursor-pointer justify-center flex items-center hover:bg-[#00000026]`} >
            {
                show ? <IoMdCloseCircle /> : <FaSearch />
            } 
        </div>

    <div className={`absolute lg:block transition-all text-slate-700 z-20 shadow-lg lg:right-10 top-[50px] w-full lg:w-[300px] right-0 ${show ? 'visible' : 'invisible'} `}>
        <div className='p-3 bg-white'>
            <form className='flex'>
                <div className='w-[calc(100%-45px)] h-[40px]'>
                    <input type="text" placeholder='Seach' className='h-full w-full p-2 border border-slate-300 outline-none bg-slate-100' />  
                </div>
            <button className='w-[45px] hover:bg-blue-700 cursor-pointer h-[40px] flex justify-center outline-none items-center bg-blue-600 text-white text-xl'>
            <FaSearch />
            </button>
            </form>

        </div>
    
    </div>    

    </div>



        </div>
    </div>

    {
        cate_show &&  <div className='flex flex-wrap lg:hidden py-2 px-[30px]'>
        <Link className={`px-4 font-medium py-[5px] ${path === '/' ? 'bg-[#00000026]' : ''} `} href={'/'} > Home </Link>

        {
            data.map((c,i) => <Link key={i} className={`px-4 font-medium py-[5px] ${path === c.name ? 'bg-[#00000026]' : ''} `} href={'/'} > { c.name} </Link>)
        } 
    </div>
    }
    
</div>
    );
};

export default Header_Category;