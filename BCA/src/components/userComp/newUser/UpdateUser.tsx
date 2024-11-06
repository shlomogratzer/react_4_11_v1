import {useEffect, useState} from 'react'

interface UserT{
    id?:string
    username:string
    email:string
    age:number
    image?:string
  }
interface PropsFun{
  user:UserT
  updateUser:(user:UserT) => void
  setUser:(user:UserT)=> void
  setFlag:(s:boolean)=>void
}
const UpdateUser = (props:PropsFun) => {
  const [username,setUsername] = useState('')
  const [email,setEmail] = useState('')
  const [age,setAge] = useState(18)
  const [image,setImage] = useState(props.user.image)
  useEffect(()=>{
    setUsername(props.user.username)
    setEmail(props.user.email)
    setAge(props.user.age)
  },[])
  const handleSubmit = (e:React.FormEvent) =>{
    e.preventDefault()
    props.updateUser({
      id : props.user.id,
      username,
      email,
      age,
      image
    })
    props.setFlag(false) 
  }

  return (
    <div className="form-group">
    <form className="" onSubmit={handleSubmit}>
      <label htmlFor="">username</label>
      <input 
      name="username"
      type="text"
      placeholder={props.user.username}
      onChange={(e)=>{
        setUsername(e.target.value)
      }} />
      <label htmlFor="">email</label>
      <input 
      name="email"
      type="text"
      placeholder={props.user.email}
      onChange={(e)=>{
        setEmail(e.target.value)
      }}/>
      <label htmlFor="">age</label>
      <input 
      name="age"
      type="number"
      placeholder={props.user.age.toString()}
      onChange={(e)=>{
        setAge(Number(e.target.value))
      }} />
      <label htmlFor="">image</label>
      <input 
      name="image"
      type="text"
      placeholder={props.user.image}
      onChange={(e)=>{
        setImage(e.target.value)
      }}/>
      <button>send</button>
    </form>
    </div>
  )
}

export default UpdateUser
