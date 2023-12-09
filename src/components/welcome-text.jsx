import React, { useState } from "react";

// MUI
import {
  Button,
  Card,
  CardContent,
  Alert,
  Snackbar,
  Typography,
} from "@mui/material";

//Components
import Greet from "./greet";

//Hooks
import useTitle from "../hooks/useTitle";

function WelcomText({ name }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useTitle(`Welcome ${isLoggedIn ? name : "Guest"}`);

  /* Function to handle login logic */
  const handleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <>
      <Snackbar
        open={isLoggedIn}
        autoHideDuration={5000}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert severity="success">
          <Typography variant="body2" gutterBottom>
            Thanks for login
          </Typography>
        </Alert>
      </Snackbar>

      <Card>
        <CardContent>
          <Greet name={isLoggedIn ? name : "Guest"} />
          <Button
            variant="contained"
            color="success"
            size="small"
            onClick={handleLogin}
          >
            {isLoggedIn ? "Logout" : "Login"}
          </Button>
        </CardContent>
      </Card>
    </>
  );
}

export default WelcomText;
