import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Notification from "./components/Notifications/Notifications";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import UserProfile from "./pages/UserProfile/UserProfile";
import EditProfile from "./pages/EditProfile/EditProfile";
import Signin from "./pages/Signin/Signin";
import Signup from "./pages/Signup/Signup";
import AboutUs from "./pages/AboutUs/AboutUs";
import ContactUs from "./pages/ContactUs/ContactUs";
import People from "./pages/People/People";
import PageNotFound from "./pages/PageNotFound/PageNotFound"
import { Route, Routes } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import RequireAuth from "./RequiredAuth";
import SmoothScroll from "smooth-scroll";

import { grey } from "@mui/material/colors";
export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const navbarItems = ["home", "about-us", "contact-us"];
  const ex = ["signin", "signup"];
  const ColorModeContext = React.createContext({ toggleColorMode: () => {} });
  const [mode, setMode] = React.useState("light");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            ...grey,
            ...(mode === "dark" && {
              main: grey[900],
            }),
          },
          ...(mode === "dark" && {
            background: {
              default: grey[900],
              paper: grey[900],
            },
          }),
          text: {
            ...(mode === "light"
              ? {
                  primary: grey[900],
                  secondary: grey[800],
                }
              : {
                  primary: "#fff",
                  secondary: grey[500],
                }),
          },
        },
      }),
    [mode]
  );
    
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Navbar
          head={"linkat"}
          items={navbarItems}
          exHead={ex}
          ColorModeContext={ColorModeContext}
          theme={theme}
        />
        <Routes>
          <Route path={`/signin`} element={<Signin />} />
          <Route path={`/signup`} element={<Signup />} />
          <Route path={`/home`} element={<Home />} />
          <Route path={`/`} element={<Home />} />
          <Route path={`/:uuid`} element={<UserProfile />} />
          <Route path={`/about-us`} element={<AboutUs />} />
          <Route path={`/contact-us`} element={<ContactUs />} />
          <Route path="*" element={<PageNotFound />} />
          
          <Route element={<RequireAuth />}>
            <Route path={`/profile`} element={<Profile />} />
            <Route path={`/people`} element={<People />} />
            <Route path={`/editprofile/`} element={<EditProfile />} />
            <Route path={`/editprofile/:option`} element={<EditProfile />} />
          </Route>
        </Routes>
        <Notification />
        <Footer />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
