import { useNavigate } from "react-router-dom";

interface UserT {
  id?: string;
  username: string;
  email: string;
  age: number;
  image?: string;
}
interface PropsUser {
  flag: boolean;
  user: UserT;
  delFunc: (id: string) => void;
  setFlag: (status: boolean) => void;
  setUser: (user: UserT) => void;
  setElected: (user: UserT) => void;
}

const UserCard = (props: PropsUser) => {
  const navigate = useNavigate();


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
        <button onClick={() => props.delFunc(props.user.id!)}>
          delete card
        </button>

        <button
          onClick={() => {
            props.setUser(props.user);
            navigate(`update/${props.user.id}`);
          }}
        >
          update card
        </button>

        <button
          onClick={() => {
            props.setElected(props.user);
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
