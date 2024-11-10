import NewUser from "./newUser/NewUser";
import { useEffect, useState, ReactNode } from "react";
import { v4 } from "uuid";
import UserCard from "./newUser/UserCard";
import UpdateUser from "./newUser/UpdateUser";
import ElectedUsers from "./newUser/ElectedUsers";
import { Link, Route, Routes } from "react-router-dom";
import ErrorPage from "../error/ErrorPage";

interface UserT {
  id?: string;
  username: string;
  email: string;
  age: number;
  image?: string;
}
interface Props {
  children: ReactNode;
}

const UserComp = () => {
  const [users, setUsers] = useState<UserT[]>([]);
  const [user, setUser] = useState<UserT>();
  const [flag, setFlag] = useState(false);
  const [elected, setElected] = useState<UserT>();

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("no information", error));
  }, []);

  const addUser = (newUser: UserT) => {
    newUser.id = v4();
    setUsers([...users, newUser]);
  };
  const delUser = (id: string) => {
    setUsers(users.filter((user) => user.id !== id));
  };
  const updateUser = (user: UserT) => {
    setUsers(
      users.map((itemUser) => (itemUser.id === user.id ? user : itemUser))
    );
  };

  return (
    <>
    <Link to='/users'>Users</Link>
    <Link to='addUser'>addUser</Link>
    <Link to='update'>update</Link>
    <Link to='elected'>elected</Link>
    <div>
      <Routes>
        <Route path="/addUser" element={<NewUser addNewUserFunc={addUser} />} />
        <Route
          path="/"
          element={
            <div className="card-list">
              {users.map((user) => {
                return (
                  <UserCard
                    user={user}
                    setUser={setUser}
                    setElected={setElected}
                    delFunc={delUser}
                    flag={flag}
                    setFlag={setFlag}
                  />
                );
              })}
            </div>
          }
        />
        <Route
          path="/update/:id"
          element={
            <UpdateUser
              user={user!}
              setUser={setUser}
              setFlag={setFlag}
              updateUser={updateUser}
            />
          }
        />
        <Route
          path="/elected"
          element={<ElectedUsers elected={elected} setElected={setElected} />}
        />
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
    </div>
    </>
  );
};

export default UserComp;
