import NewUser from "./newUser/NewUser"
import { useState } from "react"
import { v4 } from "uuid"
import UserCard from "./newUser/UserCard"
import UpdateUser from "./newUser/UpdateUser"

interface UserT{
  id?:string
  username:string
  email:string
  age:number
  image?:string
}

const UserComp = () => {

  const [users , setUsers] = useState<UserT[]>([])
  const [user , setUser] = useState<UserT>()
  const [flag,setFlag] = useState(false)

  const addUser = (newUser:UserT) => {
    newUser.id = v4()
    setUsers([...users,newUser])
  }
  const delUser = (id:string) =>{
    setUsers(users.filter(user=> user.id !== id))
  }
  const updateUser = (user: UserT) => {
    setUsers(users.map((itemUser) => (itemUser.id === user.id ? user : itemUser)));
  };
  
  return (
    <div>
      <NewUser addNewUserFunc={addUser}/>
      <div className="card-list">
      {users.map((user)=>{
        return<UserCard user={user} setUser={setUser} delFunc={delUser} flag={flag} setFlag={setFlag}/>
      })}
      </div>
      {flag && <UpdateUser user={user!} setUser={setUser} setFlag={setFlag} updateUser={updateUser}/>}
    </div>
  )
}

export default UserComp
