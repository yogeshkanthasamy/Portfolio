import React, { useState } from 'react'
 export const mode=React.createContext()
export default function Mode(props) {
    const[colormode,setcolormode]=useState(true)
  return (
    <div>
      <mode.Provider value={{colormode,setcolormode}}>
        {props.children}
      </mode.Provider>
    </div>
  )
}