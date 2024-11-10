import {useEffect, useState} from 'react'
import ElectedUserCard from './ElectedUserCard'
interface UserT{
    id?:string
    username:string
    email:string
    age:number
    image?:string
  }
  interface PropsTipe{
    elected?: UserT
    setElected: (user:UserT)=> void
  }
const ElectedUsers = (props:PropsTipe) => {
    const [electedUsers,setElectedUsers] = useState<UserT[]>([])

    useEffect(()=>{
        if(props.elected){
        setElectedUsers([...electedUsers,props.elected])
        }
    },[props.elected])
  return (
    <div>
        <h2>elected users</h2>
      {electedUsers.map((user) => {
        return <ElectedUserCard user={user}/>
      })}
    </div>
  )
}

export default ElectedUsers
