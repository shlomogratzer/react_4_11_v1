import React, { createContext ,ReactNode, useEffect, useState} from 'react'
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
  interface UsersProps{
    users:UserT[]
    setUsers:React.Dispatch<React.SetStateAction<UserT[]>>
  }
export const UsersContext = createContext<UsersProps>({
  users:[],
  setUsers:()=>{}
})

const UsersContextProvider = ({children}:Props) => {

    const [users ,setUsers] = useState<UserT[]>([])

    useEffect(() => {
        fetch("/data.json")
          .then((res) => res.json())
          .then((data) => setUsers(data))
          .catch((error) => console.error("no information", error));
      }, []);
  return (
    <UsersContext.Provider value={{users,setUsers}}>
        {children}
    </UsersContext.Provider>
  )
}

export default UsersContextProvider
