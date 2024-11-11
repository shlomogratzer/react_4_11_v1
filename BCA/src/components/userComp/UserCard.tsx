import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ElectedContext } from "../../context/UserElectedProvider";
import { UsersContext } from "../../context/UsersContextProvider";

interface UserT {
  id?: string;
  username: string;
  email: string;
  age: number;
  image?: string;
}
interface PropsUser {
  user:UserT
}

const UserCard = (props: PropsUser) => {
  const {users, setUsers} = useContext(UsersContext)
  const {elected,setElected} = useContext(ElectedContext)
  const navigate = useNavigate();


  const delUser = (id: string) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div key={props.user.id} className="card">
      <p>username: {props.user.username}</p>
      <p>email: {props.user.email}</p>
      <p>age: {props.user.age}</p>
      <img
        src={props.user.image}
        alt=""
        style={{ maxWidth: "150px", borderRadius: "8px" }}
      />
      <div className="dbtn">
        <button onClick={() => delUser(props.user.id!)}>
          delete card
        </button>

        <button
          onClick={() => {
            navigate(`update/${props.user.id}`);
          }}
        >
          update card
        </button>

        <button
          onClick={() => {
            if (!elected.some(electedUser => electedUser.id === props.user.id)) {
              setElected([...elected,props.user]);
              console.log(elected);
            } else {
              console.log("User already elected");
            }
            navigate("elected");
          }}
          
        >
          election
        </button>
      </div>
    </div>
  );
};

export default UserCard;
