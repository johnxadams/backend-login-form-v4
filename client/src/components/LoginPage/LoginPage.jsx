// libraries
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

// react-components
import { MyContext } from "../MyContext";

// styled-components
import { DefaultContainer } from "../styled-components/Container";
import { DefaultForm } from "../styled-components/Form";
import { DefaultErrorBox } from "../styled-components/ErrorBox";
import { DefaultTitle } from "../styled-components/Title";

// mui
import { Button, TextField } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

// utils
import { LoginFormSubmit } from "../../utils/LoginPageUtils";

export default function LoginPage() {
  const {
    setLoggedIn,
    email,
    setEmail,
    password,
    setPassword,
    setFirstName,
    setLastName,
    setUserName,
    error,
    setError,
  } = useContext(MyContext);

  const navigate = useNavigate();

  const handleLoginFormSubmit = (e) => {
    LoginFormSubmit({ e, setLoggedIn, navigate, setError });
  };

  const handleRemoveInputContentAndError = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setUserName("");
    setPassword("");
    setError("");
  };
  return (
    <div>
      <DefaultContainer>
        <Link to={"/"}>
          <Button
            variant="contained"
            onClick={handleRemoveInputContentAndError}
          >
            <ArrowBackIosIcon />
          </Button>
        </Link>
        <DefaultTitle>Login</DefaultTitle>
        <DefaultForm onSubmit={handleLoginFormSubmit}>
          <TextField
            id="outlined-required"
            label="Email"
            value={email}
            name="email"
            onInput={(e) => setEmail(e.target.value)}
          />
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            value={password}
            name="password"
            onInput={(e) => setPassword(e.target.value)}
          />
          <Button type="submit" variant="contained">
            Login
          </Button>
        </DefaultForm>
        <DefaultErrorBox>{error ? <p>{error}</p> : null}</DefaultErrorBox>
      </DefaultContainer>
    </div>
  );
}
