import React from 'react'
import Sidebar from '../sidebar/sidebar'
import TopBar from '../TopBar/TopBar'

const Layout = ({children}:any) => {
  return (
    <div>
        <TopBar/>
        {children}
        <Sidebar/>
      
    </div>
  )
}

export default Layout
