
import UpdateUser from './UpdateUser'

interface UserT{
    id?:string
    username:string
    email:string
    age:number
    image?:string
  }
interface PropsUser{
  flag:boolean
  user:UserT
  delFunc:(id:string)=> void
  setFlag:(status:boolean) => void;
  setUser:(user:UserT) => void
}

const UserCard = (props:PropsUser) => {
  
  return (
    <div key={props.user.id} className='card'>
      <p>username: {props.user.username}</p>
      <p>email: {props.user.email}</p>
      <p>age: {props.user.age}</p>
      <img src={props.user.image} alt="" style={{maxWidth:'150px'}} />
      <div className='dbtn'>
      <button onClick={()=>props.delFunc(props.user.id!)}>delete card</button>
      <button onClick={()=>{
        props.setUser(props.user)
        props.setFlag(true)
        }}>update card</button>
      </div>
    </div>
  )
}

export default UserCard