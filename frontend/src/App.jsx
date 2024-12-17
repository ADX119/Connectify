import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <>
    <Home/>
    {/* <BrowserRouter>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/profile/:username">
          <Profile/>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/register">
          <Register/>
        </Route>
    </BrowserRouter> */}
    </>
  );
}

export default App;
