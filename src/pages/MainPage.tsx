import React from "react";
import Navbar from "../components/bar/Navbar";
import { Box, Grid } from "@mui/material";
import { HookContextProvider } from "../components/context/HookContext";
import MainPagePhoto from "../assets/MainPagePhoto.jpg";
import HooksFilter from "../components/hooks/HooksFilter";
import TypeNavbar from "../components/bar/TypeNavbar";

const MainPage = () => {
  return (
    <HookContextProvider>
      <Grid sx={{ background: "white" }}>
        <Navbar />
        <TypeNavbar />
        <Grid
          sx={{
            marginTop: "150px",
            marginLeft: "120px",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <HooksFilter />
          <Box
            component="img"
            sx={{
              height: 550,
              width: 550,

              marginLeft: "200px",
            }}
            alt="Description of the image"
            src={MainPagePhoto}
          />
        </Grid>
      </Grid>
    </HookContextProvider>
  );
};
export default MainPage;
