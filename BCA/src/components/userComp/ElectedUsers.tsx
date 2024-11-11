import {useContext} from 'react'
import ElectedUserCard from './ElectedUserCard'
import { ElectedContext } from '../../context/UserElectedProvider'

const ElectedUsers = () => {
    const {elected} = useContext(ElectedContext)

  return (
    <div>
        <h2>elected users</h2>
      {elected.map((user) => {
        return <ElectedUserCard key={user.id} user={user}/>
      })}
    </div>
  )
}

export default ElectedUsers
