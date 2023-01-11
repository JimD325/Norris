import {useState} from 'react'

export const Nav = (props:any) => {
  
  const handleNav = (str:string) => {
    props.setSelectedComponent(str)
    
  } 

  return(
    <>
  <button onClick = {() => handleNav('Home')}> Home </button>
  <button onClick = {() => handleNav('About')}> About </button>
  <button onClick = {() => handleNav('Content')}> Content </button>
  </>
  )
  
}