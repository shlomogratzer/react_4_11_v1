import React from 'react'
interface UserT{
    id?:string
    username:string
    email:string
    age:number
    image?:string
  }
  interface PropsTipe{
    user: UserT
  }
const ElectedUserCard = (props:PropsTipe) => {
  return (
    <div>
      <div key={props.user.id} className='card'>
      <p>username: {props.user.username}</p>
      <p>email: {props.user.email}</p>
      <p>age: {props.user.age}</p>
      <img src={props.user.image} alt="" style={{maxWidth:'150px', borderRadius:'8px'}} />
      
    </div>
    </div>
  )
}

export default ElectedUserCard
