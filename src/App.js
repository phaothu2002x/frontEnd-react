import "./App.scss";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Nav from "./components/Navigation/nav";
import { BrowserRouter as Router } from "react-router-dom";
import { useEffect, useState } from "react";

import AppRoutes from "./routes/appRoutes";

function App() {
    return (
        <>
            <Router>
                <div className="app-header">
                    <Nav />
                </div>
                <div className="app-container">
                    <AppRoutes />
                </div>
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
