import Header from "./header/Header"
import Main from "./main/Main"
import Footer from "./footer/Footer"
import { ReactNode } from "react"

interface Props{
  children: ReactNode
}

const Layout = ({children}: Props) => {

  return (
   <>
   <div className="app-container">
    <Header/>
    <Main children={children}/>
    <Footer/>
   </div>
   </>
  )
}

export default Layout
