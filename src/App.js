import "./App.scss";
import Login from "./components/Login/login";
import Register from "./components/Register/register";
import ToastContainer from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import Nav from "./components/Navigation/nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
    return (
        <Router>
            <div className="app-container">
                {/* <Nav /> */}

                <Switch>
                    <Route path="/news">News</Route>
                    <Route path="/about">About</Route>
                    <Route path="/contact">Contact</Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/register">
                        <Register />
                    </Route>
                    <Route path="/" exact>
                        Home
                    </Route>
                    <Route path="*">404 not found</Route>
                </Switch>
            </div>

            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            {/* Same as */}
            <ToastContainer />
        </Router>
    );
}

export default App;
