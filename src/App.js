import "./App.scss";
import Login from "./components/Login/login";
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
                    <Route path="/" exact>
                        Home
                    </Route>
                    <Route path="*">404 not found</Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
