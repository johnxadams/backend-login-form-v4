import React, { createContext, useState } from "react";

export const MyContext = createContext();

export default function MyContextProvider({ children }) {
  const [loggedIn, setLoggedIn] = useState(true);

  // RegisterPage
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [viewer, setViewer] = useState(true);
  const [error, setError] = useState("");

  // RegisterPage && LoginPage
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <MyContext.Provider
      value={{
        loggedIn,
        setLoggedIn,
        email,
        setEmail,
        password,
        setPassword,
        firstName,
        setFirstName,
        lastName,
        setLastName,
        userName,
        setUserName,
        viewer,
        setViewer,
        error,
        setError,
      }}
    >
      {children}
    </MyContext.Provider>
  );
}
