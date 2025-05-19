import React from 'react';
import LoadingSpinner from 'react-spinners-components'
import Marquee from 'react-fast-marquee';
import Link from 'next/link';

const HeadLines = () => {

    const head = [
        {
            title: 'Modi meets top US tech leaders amid semiconductor push'
        },
        {
            title: 'Six dead after record rain causes floods in Japan'
        },
        {
            title: 'Modi meets top US tech leaders amid semiconductor push'
        },
        {
            title: 'Six dead after record rain causes floods in Japan'
        },
        {
            title: 'Modi meets top US tech leaders amid semiconductor push'
        },
        {
            title: 'Six dead after record rain causes floods in Japan'
        },
    ]


    return (
        <div className='bg-white shadow flex flex-wrap'>
            <div className='flex md:w-[170px] w-full bg-[#dddddd] relative after:absolute after:bg-[#dddddd] after:w-[20px] after:left-[160px] after:skew-x-[20deg] after:top-0 after:bottom-0 after:z-30'>
                <div className='md:pl-4 w-full py-2 flex justify-start items-center gap-x-1'>
                    <span><LoadingSpinner type='Ripple' colors={['#800000','#c80000']} size={'30px'}/> </span>
        <h2 className='text-[#333333] font-semibold text-lg'>Headlines</h2>
                </div> 
            </div>

        <div className='flex md:w-[calc(100%-170px)] w-full'>
            <div className='flex w-full justify-start items-center'>
        <Marquee>
            {
                head.map((h,i) => <Link key={i} className='py-3 font-semibold hover:text-[#c80000] pr-12 text-sm' href={'/'}>
                    {h.title}
                </Link>
                )
            }
        </Marquee>
            </div>

        </div>
             
        </div>
    );
};

export default HeadLines;