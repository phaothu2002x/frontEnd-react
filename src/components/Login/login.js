import { useHistory } from "react-router-dom";
import "./Login.scss";
function Login() {
    let history = useHistory();
    const handleCreateNewAccount = () => {
        history.push("/register");
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
                            className="form-control"
                            placeholder="Email or your phone number"
                        />
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Your password"
                        />
                        <button className="btn btn-primary">Login</button>
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
