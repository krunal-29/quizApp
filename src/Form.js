import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

export default function Form() {
  const naviget = useNavigate("");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleClick = () => {
    localStorage.setItem("Name", name);
    localStorage.setItem("E-mail", email);
    naviget("/Quizapp");
   
  };

  return (
    <div>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        style={{ height: "89vh" }}
      >
        <Grid item xs={12} md={6}>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "30vw" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="filled-basic"
              label="Name"
              variant="filled"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </Box>
          <Grid item xs={12} md={6}>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "30vw" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="filled-basic"
                label="E-mail"
                variant="filled"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </Box>
            <Grid>
              <Button
                variant="contained"
                onClick={() => {
                  handleClick();
                }}
              >
                SUBMIT
              </Button>
              
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
