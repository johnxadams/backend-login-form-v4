import React from "react";
import { Link } from "react-router-dom";
import { ContainerLandingPage } from "../styled-components/Container";

// styled-components
import { DefaultTitle } from "../styled-components/Title";

// mui
import { Button } from "@mui/material";

export default function LandingPage() {
  return (
    <div>
      <ContainerLandingPage>
        <DefaultTitle>Landingpage</DefaultTitle>

        <Link to={"/register"}>
          <Button variant="contained">Register</Button>
        </Link>
        <Link to={"/login"}>
          <Button variant="contained">Login</Button>
        </Link>
      </ContainerLandingPage>
    </div>
  );
}
