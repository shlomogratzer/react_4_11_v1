import NewUser from "./NewUser";
import { useState, useContext } from "react";
import { v4 } from "uuid";
import UserCard from "./UserCard";
import UpdateUser from "./UpdateUser";
import ElectedUsers from "./ElectedUsers";
import { Link, Route, Routes } from "react-router-dom";
import ErrorPage from "../error/ErrorPage";
import  { UsersContext } from "../../context/UsersContextProvider";
import PageHeder from "./PageHeder";

interface UserT {
  id?: string;
  username: string;
  email: string;
  age: number;
  image?: string;
}



const UserComp = () => {

  const usersContext = useContext(UsersContext)

  return (
    <>
    <div>
      <Routes>
        <Route path="/addUser" element={<NewUser />} />
        <Route
          path="/"
          element={
            <>
            <PageHeder title="All users" subtitle="List of all users"/>
            <div className="card-list">
              {usersContext.users.map((user) => {
                return (
                  <UserCard
                  user={user}
                  />
                );
              })}
            </div>
            </>
          }
        />
        <Route
          path="/update/:id"
          element={
            <UpdateUser
            />
          }
        />
        <Route
          path="/elected"
          element={<ElectedUsers/>}
        />
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
    </div>
    </>
  );
};

export default UserComp;
