import React from "react";
import Grid from "@mui/material/Grid";
import Container from '@mui/material/Container';
import UserDetail from "./UserDetail";
import UserProfile from "./UserProfile";
import Navbar from "../../Components/NavigationBar/Navbar";
import Footer from "../../Components/Footer/Footer";

const UserView = () => {
  return (
    <>
    <Navbar />
    <Container maxWidth="xl">
      <Grid container spacing={9}>
        <Grid item xs={3} sx={{paddingLeft: '30px'}}>
          <UserProfile />
        </Grid>
        <Grid item xs={9} mt={6}>
          <UserDetail />
        </Grid>
      </Grid>
    </Container>
      <Footer />
    </>
  );
};

export default UserView;
