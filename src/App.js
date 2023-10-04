import "./App.scss";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Nav from "./components/Navigation/nav";
import { BrowserRouter as Router } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import AppRoutes from "./routes/appRoutes";
import { Rings } from "react-loader-spinner";
import { UserContext } from "./context/UserContext";

function App() {
    const { user } = useContext(UserContext);

    return (
        <>
            <Router>
                {user && user.isLoading ? (
                    <div className="loading-container">
                        <Rings
                            visible={true}
                            height="80"
                            width="80"
                            ariaLabel="dna-loading"
                            color="#1877f2"
                            wrapperStyle={{}}
                            wrapperClass="dna-wrapper"
                        />
                        <div>Loading data...</div>
                    </div>
                ) : (
                    <>
                        <div className="app-header">
                            <Nav />
                        </div>
                        <div className="app-container">
                            <AppRoutes />
                        </div>
                    </>
                )}
            </Router>

            <ToastContainer
                position="bottom-center"
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
        </>
    );
}

export default App;
