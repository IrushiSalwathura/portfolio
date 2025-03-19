import React from 'react'
import NavLink from './NavLink'

type Props = {
    links: { title: string; path: string }[];  // Accepts an object with links
};


const MenuOverlay = ( {links}:Props) => {
  return (
    <ul className='flex flex-col py-4 items-center'>
        {links.map((link ,index:number)=>(
            <li key={index}>
                <NavLink href={link.path} title={link.title}/>
            </li>)
        )}</ul>
  )
}

export default MenuOverlay;