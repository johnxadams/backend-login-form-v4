// libraries
import { useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

// react-components
import { MyContext } from "../MyContext";

// styled-components
import { TitleWelcomePage } from "../styled-components/Title";
import { ContainerWelcomePage } from "../styled-components/Container";

// mui
import { Button } from "@mui/material";

export default function WelcomePage() {
  const { setLoggedIn, setPassword } = useContext(MyContext);

  const handleLogout = async () => {
    axios.get(`/api/user/logout`);
    setLoggedIn(false);
    setPassword("");
  };

  return (
    <div>
      <ContainerWelcomePage>
        <TitleWelcomePage>Welcome to the App</TitleWelcomePage>
        <Link onClick={handleLogout} to="/">
          <Button variant="contained">Logout</Button>
        </Link>
      </ContainerWelcomePage>
    </div>
  );
}
