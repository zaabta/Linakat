import Home from "./pages/home/Home";
// import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import RequireAuth from "./RequireAuth";
import Signin from "./pages/signin/Signin";
import Notifications from "./components/notifications/Notifications";
import ListUsers from "./pages/listusers/ListUsers";
import SingleUser from "./pages/singleuser/SingleUser"
import ListAdmins from "./pages/listadmins/ListAdmins"
import LinkTypes from "./pages/linktypes/LinkTypes"

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="signin" element={<Signin/>} />
          <Route element={<RequireAuth />}>
            <Route path="/">
              <Route index element={<Home />} />
              <Route path="users">
                <Route index element={<ListUsers />} />
                <Route path=":userId" element={<SingleUser />} />
              </Route>
              <Route path="admins">
                <Route index element={<ListAdmins />} />
              </Route>
              <Route path="linktypes">
                <Route index element={<LinkTypes />} />
              </Route>
            </Route>
          </Route>
        </Routes>
        <Notifications />
      </BrowserRouter>
    </div>
  );
}

export default App;
