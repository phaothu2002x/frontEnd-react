import { Switch, Route } from "react-router-dom";
import Login from "../components/Login/login";
import Register from "../components/Register/register";
import Users from "../components/ManageUser/users";
import PrivateRoutes from "./privateRoutes";

const AppRoutes = (props) => {
    const Project = () => {
        return <div> Projects component</div>;
    };

    return (
        <>
            <Switch>
                <PrivateRoutes path="/users" component={Users} />
                <PrivateRoutes path="/projects" component={Project} />

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
        </>
    );
};

export default AppRoutes;
