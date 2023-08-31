import { useHistory } from "react-router-dom";
import "./Register.scss";

function Register() {
    let history = useHistory();
    const handleLogin = () => {
        history.push("/login");
    };
    return (
        <div className="register-container">
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

                        <div className="form-group">
                            <label>Email:</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Email address"
                            />
                        </div>

                        <div className="form-group">
                            <label>Phone:</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Phone number"
                            />
                        </div>
                        <div className="form-group">
                            <label>UserName:</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="UserName"
                            />
                        </div>
                        <div className="form-group">
                            <label>Password:</label>
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Password"
                            />
                        </div>
                        <div className="form-group">
                            <label>Re-enter Password:</label>
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Re-enter Password"
                            />
                        </div>
                        <button className="btn btn-primary">Register</button>

                        <hr />
                        <div className="text-center">
                            <button
                                className="btn btn-success"
                                onClick={handleLogin}
                            >
                                Already have an account/ login
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
