import { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

interface UserT {
  id?: string;
  username: string;
  email: string;
  age: number;
  image?: string;
}
interface PropsFun {
  user: UserT;
  updateUser: (user: UserT) => void;
  setUser: (user: UserT) => void;
  setFlag: (s: boolean) => void;
}
const UpdateUser = (props: PropsFun) => {
  const {id} = useParams()
  const usersNavigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(18);
  const [image, setImage] = useState(props.user.image);
  const [btnStatus, setBtnStatus] = useState<boolean>(false);

  useEffect(() => {
    setUsername(props.user.username);
    setEmail(props.user.email);
    setAge(props.user.age);
  }, []);
  const handleSubmit = (e: React.FormEvent) => {
    if (btnStatus) {
      e.preventDefault();
      props.updateUser({
        id: props.user.id,
        username,
        email,
        age,
        image,
      });
    }
    usersNavigate("/users");
    setBtnStatus(false);
  };

  return (
    <div className="form-group">
      <form className="" onSubmit={handleSubmit}>
        <label htmlFor="">username</label>
        <input
          name="username"
          type="text"
          placeholder={props.user.username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <label htmlFor="">email</label>
        <input
          name="email"
          type="text"
          placeholder={props.user.email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <label htmlFor="">age</label>
        <input
          name="age"
          type="number"
          placeholder={props.user.age.toString()}
          onChange={(e) => {
            setAge(Number(e.target.value));
          }}
        />
        <label htmlFor="">image</label>
        <input
          name="image"
          type="text"
          placeholder={props.user.image}
          onChange={(e) => {
            setImage(e.target.value);
          }}
        />
        <img
          src={image}
          alt=""
          style={{ maxWidth: "250px", borderRadius: "8px" }}
        />
        <div className="dbtn">
          <button onClick={() => setBtnStatus(true)}>send</button>
          <button>chanel</button>
        </div>
      </form>
    </div>
  );
};

export default UpdateUser;
