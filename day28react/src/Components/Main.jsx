import React from 'react'
import Blognav from './Blognav'

const Main = ({child}) => {
  return (
    <div>
<Blognav/>
{child}
    </div>
  )
}

export default Main