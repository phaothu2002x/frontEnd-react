import { useHistory } from "react-router-dom";
import "./Login.scss";
import { useState } from "react";
import { toast } from "react-toastify";
import { loginUser } from "../../services/userService";
function Login() {
    let history = useHistory();

    const [valueLogin, setValueLogin] = useState("");
    const [password, setPassword] = useState("");

    const defaultObjValidInput = {
        isValidValueLogin: true,
        isValidValuePassword: true,
    };
    const [objValidInput, setObjValidInput] = useState(defaultObjValidInput);

    const handleCreateNewAccount = () => {
        history.push("/register");
    };

    const handleLogin = async () => {
        setObjValidInput(defaultObjValidInput);
        if (!valueLogin) {
            setObjValidInput({
                ...defaultObjValidInput,
                isValidValueLogin: false,
            });
            toast.error("Please enter your email address/ phone number");
            return;
        }

        if (!password) {
            setObjValidInput({
                ...defaultObjValidInput,
                isValidValuePassword: false,
            });
            toast.error("Please enter your password");
            return;
        }

        let response = await loginUser(valueLogin, password);
        if (response && response.data && +response.data.EC === 0) {
            //success
            let data = {
                isAuthenticated: true,
                token: "fake token",
            };
            sessionStorage.setItem("account", JSON.stringify(data));
            history.push("/users");
        }

        if (response && response.data && +response.data.EC !== 0) {
            toast.error(response.data.EM);
        }
    };

    return (
        <div className="login-container">
            <div className="container">
                <div className="row px-1 px-sm-0">
                    <div className="content-left col-sm-7 d-sm-block d-none d-sm-block">
                        <div className="brand">Truong Vu Thuan</div>
                        <div className="detail">
                            [ Tiktok có gì zui] Khi bạn hướng nội tới há dì lao
                            nghe hát chúc mừng sinh nhật phiên bản sợ đám đông
                            là trải nghiệm thế nào?
                        </div>
                    </div>
                    <div className="content-right col-sm-5 col-12 d-flex flex-column gap-3 py-3 mx-sm-0 mx-3">
                        <div className="brand d-sm-none text-center">
                            Truong Vu Thuan
                        </div>
                        <input
                            type="text"
                            className={
                                objValidInput.isValidValueLogin
                                    ? "form-control"
                                    : "form-control is-invalid"
                            }
                            placeholder="Email or your phone number"
                            value={valueLogin}
                            onChange={(e) => setValueLogin(e.target.value)}
                        />
                        <input
                            type="password"
                            className={
                                objValidInput.isValidValuePassword
                                    ? "form-control"
                                    : "form-control is-invalid"
                            }
                            placeholder="Your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button
                            className="btn btn-primary"
                            onClick={() => handleLogin()}
                        >
                            Login
                        </button>
                        <span className="text-center">
                            <a className="forgot-password" href="/#">
                                Forgot your password ?
                            </a>
                        </span>
                        <hr />
                        <div className="text-center">
                            <button
                                className="btn btn-success"
                                onClick={handleCreateNewAccount}
                            >
                                Create new account
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
