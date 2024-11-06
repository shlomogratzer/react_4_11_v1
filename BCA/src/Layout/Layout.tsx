import Header from "./header/Header"
import Main from "./main/Main"
import Footer from "./footer/Footer"
import { useState } from "react"



const Layout = () => {
  // const user = {
  //   email:'shlomo@gmail.com',
  //   username:'slomogratzer',
  //   age:27
  // }
  
  return (
   <>
   <div className="app-container">
    <Header/>
    <Main />
    <Footer/>
   </div>
   </>
  )
}

export default Layout
