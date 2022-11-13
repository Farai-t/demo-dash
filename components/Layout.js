import React from 'react'
import SideBar from './SideBar'
import Sidebar from './sidemenu'

const Layout = ( { children } ) => {
  return (
    <div className='flex bg-neutral-300 h-auto'>
        <div>
            <Sidebar />
        </div>
        <div className='min-h-screen flex-grow mx-4 my-4 px-2 lg:ml-[20rem]'>
            { children }
        </div>
    </div>
  )
}

export default Layout