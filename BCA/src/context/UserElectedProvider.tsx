import React, { createContext,ReactNode, useEffect, useState} from 'react'
interface UserT {
    id?: string;
    username: string;
    email: string;
    age: number;
    image?: string;
  }
  interface Props {
    children: ReactNode;
  }
  interface ElectedProps{
    elected:UserT[]
    setElected:React.Dispatch<React.SetStateAction<UserT[]>>
  }
export const ElectedContext = createContext<ElectedProps>({
  elected:[],
  setElected:()=>{}
})

const UserElectedProvider = ({children}:Props) => {
    const [elected ,setElected] = useState<UserT[]>([])
    
  return (
    <ElectedContext.Provider value={{elected,setElected}}>
        {children}
    </ElectedContext.Provider>
  )
}

export default UserElectedProvider
