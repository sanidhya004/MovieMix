import React from 'react'
import "./layout.scss"
const Layout = ({children}) => {
  return (
    <div className='contentWrapper'>
      {children}
    </div>
  )
}

export default Layout
