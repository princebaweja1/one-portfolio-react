import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { useState } from 'react'


const SocialLinks = () => {

    const [nav, setNav] = useState(false);

    const links = [
    {
      id: 1,
      child: (
        <>
        Linkedin <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/princebaweja1/"
    },
    {
      id: 2,
      child: (
        <>
        Github <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/princebaweja1"
    },
    {
      id: 3,
      child: (
        <>
        Mail <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:princebaweja1@gmail.com"
    },
    {
      id: 4,
      child: (
        <>
        Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: '/prince-resume.pdf',
      download: true
    }
  ];

  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
        <ul>

            {links.map( ( { id, child, href, download } ) => {
                return <li key={id} className='flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:ml-[-10px] hover:rounded-md '>
                
                <a
                 href={href}
                 className='flex justify-between items-center w-full text-white'
                 download={download}
                 target='_blank'
                 rel="noreferrer"
                >
                    {child}
                </a>
                </li>
            })}




        </ul>
    </div>
  )
}

export default SocialLinks;