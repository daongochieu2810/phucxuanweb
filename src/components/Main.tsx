import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Header from "./Header";
import Footer from "./Footer";
import Homepage from "../components/Home/Homepage";
import AboutUsPage from "../components/AboutUs/AboutUsePage";
import BrandsPage from "../components/Brands/BrandsPage";
import ContactUs from "../components/ContactUs/ContactUsPage";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
    justifyContent: "space-between",
  },
  mainPage: {
    position: "relative",
    minHeight: "100vh",
  },
}));

const sections = [
  { title: "Home", url: "/" },
  { title: "About Us", url: "/aboutus" },
  { title: "Brands", url: "/brands" },
  { title: "Contact Us", url: "/contactus" },
];

export default function Main() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Phuc Xuan" sections={sections} />
        <main className={classes.mainPage}>
          <Router basename="/">
            <div>
              <Switch>
                <Route exact path="/">
                  <Homepage />
                </Route>
                <Route path="/aboutus">
                  <AboutUsPage />
                </Route>
                <Route path="/contactus">
                  <ContactUs />
                </Route>
                <Route path="/brands">
                  <BrandsPage />
                </Route>
              </Switch>
            </div>
          </Router>
        </main>
        <Footer title="Phuc Xuan LTD" description="Designed by Dao Ngoc Hieu" />
      </Container>
    </React.Fragment>
  );
}
