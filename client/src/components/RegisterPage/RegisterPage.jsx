// libraries
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

// react-components
import { MyContext } from "../MyContext";

// styled-components
import { DefaultContainer } from "../styled-components/Container";
import { DefaultForm } from "../styled-components/Form";
import { DefaultErrorBox } from "../styled-components/ErrorBox";
import { DefaultTitle } from "../styled-components/Title";

// material ui
import { TextField, InputAdornment, Button } from "@mui/material";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

// utils
import { RegisterFormSubmit } from "../../utils/RegisterPageUtils";

export default function RegisterPage() {
  const {
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
  } = useContext(MyContext);

  const navigate = useNavigate();

  const handleRegisterFormSubmit = (e) => {
    RegisterFormSubmit(e, setError, navigate);
  };

  const handleVisibility = (e) => {
    setViewer(!viewer);
  };

  return (
    <div>
      <DefaultContainer register>
        <Link to={"/"}>
          <Button variant="contained">
            <ArrowBackIosIcon />
          </Button>
        </Link>
        <DefaultTitle>Register</DefaultTitle>
        <DefaultForm onSubmit={handleRegisterFormSubmit}>
          <TextField
            required
            id="outlined-required"
            label="Firstname"
            value={firstName}
            name="firstName"
            onInput={(e) => setFirstName(e.target.value)}
          />
          <TextField
            id="outlined-required"
            label="Lastname"
            value={lastName}
            name="lastName"
            onInput={(e) => setLastName(e.target.value)}
          />
          <TextField
            id="outlined-required"
            label="Email"
            value={email}
            name="email"
            onInput={(e) => setEmail(e.target.value)}
          />
          <TextField
            id="outlined-required"
            label="Username"
            value={userName}
            name="userName"
            onInput={(e) => setUserName(e.target.value)}
          />
          <TextField
            id="outlined-password-input"
            label="Password"
            type={viewer ? "password" : "text"}
            autoComplete="current-password"
            value={password}
            name="password"
            onInput={(e) => setPassword(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end" onClick={handleVisibility}>
                  {viewer ? (
                    <VisibilityOffOutlinedIcon />
                  ) : (
                    <VisibilityOutlinedIcon />
                  )}
                </InputAdornment>
              ),
            }}
          />
          <Button type="submit" variant="contained">
            Submit
          </Button>
          {/* <button>Click Me</button> */}
        </DefaultForm>
        <DefaultErrorBox>{error ? <p>{error}</p> : null}</DefaultErrorBox>
      </DefaultContainer>
    </div>
  );
}
