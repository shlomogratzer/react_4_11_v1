import React, { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  return (
    <>
      <form action="">
        <p>
          <label htmlFor="username">username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </p>
        <p>
          <label htmlFor="password">password</label>
          <input
            type="text"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </p>
      </form>
    </>
  );
};

export default Login;
