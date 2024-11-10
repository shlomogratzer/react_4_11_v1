import UserComp from '../../components/userComp/UserComp'
import { ReactNode } from 'react'
interface Props{
  children: ReactNode
}
const Main = ({children}: Props) => {
  

  return (
    <main>
      {children}
    </main>
  )
}

export default Main
