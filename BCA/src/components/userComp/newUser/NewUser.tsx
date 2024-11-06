import { useState } from "react"
interface PropsTipe{
  username:string
  email:string
  age:number
  image?:string

}

interface PropsFun{
  addNewUserFunc :(user:PropsTipe) => void
}


const NewUser = (props: PropsFun) => {

  const [username,setUsername] = useState('')
  const [email,setEmail] = useState('')
  const [age,setAge] = useState(0)
  const [image,setImage] = useState('')
  const handleSubmit = (e:React.FormEvent) =>{
    e.preventDefault()
    props.addNewUserFunc({
      username,
      email,
      age,
      image
    })
    setUsername('')
    setEmail('')
    setAge(0)
    setImage('')
  }

  return (
    <div className="form-group">
    <form className="" onSubmit={handleSubmit}>
      <label htmlFor="">username</label>
      <input 
      name="username"
      type="text"
      value={username}
      placeholder="username"
      onChange={(e)=>{
        setUsername(e.target.value)
      }} />
      <label htmlFor="">email</label>
      <input 
      name="email"
      type="text"
      value={email} 
      placeholder="email"
      onChange={(e)=>{
        setEmail(e.target.value)
      }}/>
      <label htmlFor="">age</label>
      <input 
      name="age"
      type="number"
      value={age}
      placeholder="age"
      onChange={(e)=>{
        setAge(Number(e.target.value))
      }} />
      <label htmlFor="">image</label>
      <input 
      name="image"
      type="text" 
      value={image}
      placeholder="image"
      onChange={(e)=>{
        setImage(e.target.value)
      }}/>
      <button >send</button>
    </form>
    </div>
  )
}

export default NewUser
