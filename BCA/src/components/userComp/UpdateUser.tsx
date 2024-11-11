import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { UsersContext } from "../../context/UsersContextProvider";

interface UserT {
  id?: string;
  username: string;
  email: string;
  age: number;
  image?: string;
}


const UpdateUser = () => {
  const usersContext = useContext(UsersContext)
  const {id} = useParams()
  const usersNavigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(18);
  const [image, setImage] = useState('');
  const [btnStatus, setBtnStatus] = useState<boolean>(false);

  const findUser = () => (usersContext.users.find(user => user.id === id))
  useEffect(() => {
    const user = findUser()
    if(user){
    setUsername(user.username);
    setEmail(user.email);
    setAge(user.age);
    if(user.image){
      setImage(user.image)
    }
    }
  }, []);
  const updateUser = (user: UserT) => {
    usersContext.setUsers(
      usersContext.users.map((itemUser) => (itemUser.id === user.id ? user : itemUser))
    );
  };
  const handleSubmit = (e: React.FormEvent) => {
    if (btnStatus) {
      e.preventDefault();
      updateUser({
        id,
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
          placeholder={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <label htmlFor="">email</label>
        <input
          name="email"
          type="text"
          placeholder={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <label htmlFor="">age</label>
        <input
          name="age"
          type="number"
          placeholder={age.toString()}
          onChange={(e) => {
            setAge(Number(e.target.value));
          }}
        />
        <label htmlFor="">image</label>
        <input
          name="image"
          type="text"
          placeholder={image}
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
