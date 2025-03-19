import React, { ReactNode } from 'react'

const TabButton = ({active, selectTab, children}:
    {active:boolean, 
    selectTab:()=>void,
    children:ReactNode}) => {

const buttonClasses = active ? "text-yellow-600 border-b border-yellow-600" : "text-black-200 border-b border-yellow-600"
  return (
    <button onClick={selectTab}
    className={`mr-3 font-semibold hover:text-yellow-100 ${buttonClasses}`}>
        {children}
    </button>
  )
}

export default TabButton;