import { AppBar, Toolbar, Button, Grid, Box } from "@mui/material";
import React from "react";
import OEEImage from "../assets/OEEImage.jpg";
import { useNavigate } from "react-router-dom";

const array = [
  { id: 1, name: "OEE DASHBOARD" },
  { id: 2, name: "DATA AQUISATION" },
  { id: 3, name: "ADD  MACHINEE" },
  { id: 4, name: "DELETE MACHINE" },
  { id: 5, name: "UPDATE MACHINE" },
];
const HomePage = () => {
  const navigate = useNavigate();
  const currDate = new Date().toLocaleDateString();
  //const currTime = new Date().toLocaleTimeString();

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Button variant="contained">Create</Button>
        </Toolbar>
      </AppBar>
      <Box
        style={{
          margin: 20,
        }}
      >
        <Grid
          container
          spacing={2}
          //columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {array.map((ar) => {
            return (
              <Grid item md={2.4}>
                <div class="card">
                  <h3 class="card__title">{ar.name}</h3>
                  <div class="card__date">{currDate}</div>
                  {/* <div class="card__date">{currTime}</div> */}
                  <div class="card__arrow">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      height="15"
                      width="15"
                      onClick={() => {
                        ar.id === 2
                          ? navigate("/dataaquisation")
                          : navigate("/factoryregistration");
                      }}
                    >
                      <path
                        fill="#fff"
                        d="M13.4697 17.9697C13.1768 18.2626 13.1768 18.7374 13.4697 19.0303C13.7626 19.3232 14.2374 19.3232 14.5303 19.0303L20.3232 13.2374C21.0066 12.554 21.0066 11.446 20.3232 10.7626L14.5303 4.96967C14.2374 4.67678 13.7626 4.67678 13.4697 4.96967C13.1768 5.26256 13.1768 5.73744 13.4697 6.03033L18.6893 11.25H4C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H18.6893L13.4697 17.9697Z"
                      ></path>
                    </svg>
                  </div>
                </div>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </>
  );
};

export default HomePage;
